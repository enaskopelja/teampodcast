import slack_sdk
import re
import os

token = os.getenv('SLACK_TOKEN')

channel_id = 'C04PJQW1H9P'

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
