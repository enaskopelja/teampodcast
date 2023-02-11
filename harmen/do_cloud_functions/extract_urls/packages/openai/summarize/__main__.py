from http import HTTPStatus
import os
from gpt_index import GPTTreeIndex, SimpleDirectoryReader



def main(args):
    print(args)
    articles = args["articles"] # list of articles
    prompts = args["prompts"] # list of prompts

    # first make a directory data/ with all the articles as text files

    # make the directory
    os.mkdir("data")

    # write the articles to the directory
    for i, article in enumerate(articles):
        with open(f"data/article_{i}.txt", "w") as f:
            f.write(article["body"])

    documents = SimpleDirectoryReader('data').load_data()
    index = GPTTreeIndex(documents)
    index.save_to_disk('index.json')

    responses = []
    for prompt in prompts:
        responses.append({
            "prompt" : prompt,
            "response" : index.query(prompt)
        })


    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body": {"responses" : responses}
    }