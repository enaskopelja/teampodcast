import re
import os

from http import HTTPStatus
import requests

TRANSISTOR_FM_TOKEN = os.getenv("TRANSISTOR_FM_TOKEN")

def publish_podcast(episode_id):
    headers = {
        'x-api-key': TRANSISTOR_FM_TOKEN,
        'content-type': 'application/x-www-form-urlencoded',
    }

    data = 'episode[status]=published&fields[episode][]=status'

    response = requests.patch(f'https://api.transistor.fm/v1/episodes/{episode_id}/publish', headers=headers, data=data)



def upload_podcast(title, summary, audio_url, transcript_text):
    headers = {
        'x-api-key': TRANSISTOR_FM_TOKEN,
        'content-type': 'application/json',
    }

    data = {
        "episode": {
            "show_id": 38673,
            "title": title,
            "summary": summary,
            "audio_url": audio_url,
            "transcript_text": transcript_text,
        }
    }

    response = requests.post('https://api.transistor.fm/v1/episodes', headers=headers, json=data)
    episode_id = response.json()['data']['id']
    publish_podcast(episode_id)
    share_url = response.json()['data']['attributes']['share_url']
    return share_url

def main(args):
    podcast_title = args["podcast_title"]
    podcast_summary = args["podcast_summary"]
    podcast_transcript_text = args["podcast_transcript_text"]
    #podcast_season = args["podcast_season"]
    #podcast_number = args["podcast_number"]
    podcast_audio_url = args["podcast_audio_url"]

    # upload podcast
    share_url = upload_podcast(podcast_title, podcast_summary, podcast_audio_url, podcast_transcript_text)
    
    # return urls as json
    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body" : {"share_url" : share_url}
    }
