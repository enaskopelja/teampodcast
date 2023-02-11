import slack_sdk
import re
import os

token = os.getenv('SLACK_TOKEN')

channel_id = 'C04P664SJ66'

from http import HTTPStatus
import requests

def main(args):

    client = slack_sdk.WebClient(token=token)
    
    # podcast url
    message = args["message"]

    # post the url as a message to slack
    client.chat_postMessage(
        channel=channel_id,
        text=message
    )

    # return urls as json
    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body" : "success"
    }

def main_old(args):

    client = slack_sdk.WebClient(token=token)

    # podcast url
    podcast_url = args["podcast_url"]
    podcast_intro = args["podcast_intro"]
    output_file = args["output_file"]

    # download podcast
    r = requests.get(podcast_url)
    with open(output_file, "wb") as f:
        f.write(r.content)

    # post the url as a file to slack
    client.files_upload(
        channels=channel_id,
        file=output_file,
        initial_comment=podcast_intro
    )

    # return urls as json
    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body" : "success"
    }
