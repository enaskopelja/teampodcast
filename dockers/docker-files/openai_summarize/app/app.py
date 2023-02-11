from http import HTTPStatus
import os
from flask import Flask, request, jsonify

from gpt_index import GPTTreeIndex, SimpleDirectoryReader, LLMPredictor
from langchain import OpenAI

import uuid
app = Flask(__name__)


@app.route('/openai/summarize', methods = ['POST'])
def summarize():
    llm_predictor = LLMPredictor(llm=OpenAI(temperature=0.3, model_name="text-davinci-003"))
    content = request.json
    articles = content["articles"] # list of articles
    prompts = content["prompts"] # list of prompts

    # first make a directory data/ with all the articles as text files

    data_dir = f"{uuid.uuid4()}_data"
    # make the directory
    os.mkdir(data_dir)

    # write the articles to the directory
    for i, article in enumerate(articles):
        with open(f"{data_dir}/article_{i}.txt", "w") as f:
            f.write("\n".join(article["body"]))

    documents = SimpleDirectoryReader(data_dir).load_data()
    index = GPTTreeIndex(documents, llm_predictor=llm_predictor)
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
