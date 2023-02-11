from http import HTTPStatus
import os
from flask import Flask, request, jsonify

from gpt_index import GPTTreeIndex, SimpleDirectoryReader

app = Flask(__name__)


@app.route('/openai/summarize', methods = ['POST'])
def summarize():
    content = request.json
    articles = content["articles"] # list of articles
    prompts = content["prompts"] # list of prompts

    # first make a directory data/ with all the articles as text files

    # make the directory
    os.mkdir("data")

    # write the articles to the directory
    for i, article in enumerate(articles):
        with open(f"data/article_{i}.txt", "w") as f:
            f.write("\n".join(article["body"]))

    documents = SimpleDirectoryReader('data').load_data()
    index = GPTTreeIndex(documents)
    index.save_to_disk('index.json')

    responses = []
    for prompt in prompts:
        responses.append({
            "prompt" : prompt,
            "response" : index.query(prompt).response
        })


    return jsonify({
        "statusCode" : HTTPStatus.ACCEPTED,
        "body": {"responses" : responses}
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
