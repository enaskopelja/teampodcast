import logging
import os
import time
import uuid
from io import BytesIO

import gcsfs as gcsfs
import requests
import json

from pydub import AudioSegment
from flask import Flask, request, Response

app = Flask(__name__)

BASE = "https://play.ht/api/v1"
CONVERT_URL = f"{BASE}/convert"

headers = {
    'Authorization': os.environ['PLAY_API_KEY'],
    'X-User-ID': 'QmUxu9CtLBgwvayDDdUpo2T577U2',
    'Content-Type': 'application/json'
}


class NotReady(Exception):
    pass


def _convert_single(voice, text, title):
    payload = json.dumps({
        "voice": voice,
        "content": [text],
        "speed": "1.0",
        "preset": "balanced",
        "title": title
    })
    response = requests.request("POST", CONVERT_URL, headers=headers, data=payload)
    logging.info(response.status_code)
    logging.info(response.content)
    return json.loads(response.text)['transcriptionId']


def convert(text: list[dict[str, str]]):
    return [_convert_single(**itm, title=f"{uuid.uuid4()}-{idx}") for idx, itm in enumerate(text)]


def _to_audio_url(transcriptionId):
    fetch_url = f"https://play.ht/api/v1/articleStatus?transcriptionId={transcriptionId}&ultra=true"
    response = requests.request("GET", fetch_url, headers=headers)

    return json.loads(response.text)['audioUrl'][0]


def _download_bytes(audio_url):
    result = requests.request("GET", audio_url)
    if not str(result.status_code).startswith('2'):
        raise NotReady(f"[{result.status_code}] {result.content}")
    return requests.request("GET", audio_url).content


def merge(audio_bytes):
    return sum([AudioSegment.from_wav(BytesIO(x)) for x in audio_bytes])


def download(audio_urls):
    audio_bytes = [_download_bytes(audio_url) for audio_url in audio_urls]
    result = merge(audio_bytes)
    local_path = f'{uuid.uuid4()}.mp3'
    result.export(local_path, format='mp3')
    return local_path


def upload_to_gcs(local_path):
    fs = gcsfs.GCSFileSystem(project='grounded-garage-377420')
    blob_name = f"team-podcast/{local_path}"

    with (fs.open(blob_name, "wb") as out,
          open(local_path, 'rb') as local):
        out.write(local.read())
    return f'https://storage.googleapis.com/{blob_name}'


@app.route("/", methods=['POST'])
def api():
    return main(request.json["body"]["conversation"])


def main(content):
    transcription_ids = convert(content)
    logging.info(transcription_ids)
    time.sleep(20)
    audio_urls = [_to_audio_url(transcription_id) for transcription_id in transcription_ids]
    logging.info(audio_urls)
    local_path = None
    for _ in range(5):
        try:
            local_path = download(audio_urls)
            break
        except NotReady as e:
            logging.info(f'Not yet ready! {e}')
            time.sleep(20)

    if local_path is None:
        return Response(status=500, response="Unable to generate voice, please try again")

    remote_url = upload_to_gcs(local_path)
    os.remove(local_path)
    logging.info(f"Contents written to {remote_url}")
    return Response(status=200,
                    content_type='text/plain',
                    response=remote_url)


if __name__ == '__main__':
    # main([{"voice": "Larry", "text": "Spatially resolved transcriptomics is a high-throughput sequencing technique that allows researchers to analyze the transcriptome of a tissue while retaining the spatial information of the tissue. This has enabled researchers to gain new insights into biological processes in the past three years. Spatial transcriptomics enables the analysis of cells in the context of the tissue structure, providing a new perspective of cell status."},{"voice": "Ellie", "text": "In order to make full use of the location information, new methods are needed to process the data. The first step is to reduce the data dimensionality by filtering genes with variance of expression. This is done by identifying highly variable genes. In spatial transcriptomics, detecting genes with spatial expression patterns or spatially variable genes is the first and important step in describing complex spatial transcriptomic landscapes. These spatially variable genes can be caused by cell type localization or space-dependent cell interactions, and are thus informative for multiple downstream analyses, such as reconstructing tissue structure. They can also provide biological insight, as different spatial expression patterns reflect different gene functions."}])
    app.run(host='0.0.0.0', port=1950, debug=True)
