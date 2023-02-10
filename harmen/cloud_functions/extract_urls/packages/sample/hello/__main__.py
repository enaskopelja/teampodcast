import slack_sdk
import re
import os
token = 'xoxb-4785919059330-4786296935682-OL191JGh2OIoUG5dY5uJcep5'
channel_id = 'C04P4EWMHKM'

from http import HTTPStatus

def main(args):

    client = slack_sdk.WebClient(token=token)
    response = client.conversations_history(channel=channel_id)
    # get all messages
    messages = response['messages']
    # get all urls
    urls = []
    for message in messages:
        # extract urls from message using regex
        urls += re.findall(r'(https?://[A-Za-z\d\/\-\.]+)', message['text'])
    urls = list(set(urls))

    # return urls as json
    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body" : urls
    }
