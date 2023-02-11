from http import HTTPStatus


def split_text(body, max_length=2000):
    paragraphs = {}
    for i, paragraph in enumerate(body):
        paragraphs[i] = []
        text = ""
        n_characters = 0
        # we'll loop through the paragraph sentence by sentence, we're adding 
        # split the paragraph into sentences
        for sentence in paragraph.split(". "):
            # if adding a sentence would be too long, finish off the current text
            if n_characters + len(sentence) > max_length:
                paragraphs[i].append(text)
                text = ""
                n_characters = 0
            # add the sentence to the current text
            text += sentence + ". "
            n_characters += len(sentence)
        # add the last text to the list
        paragraphs[i].append(text)
    return paragraphs


def main(args):
    print(args)
    article = args["article"]
    character_limit = args["character_limit"]

    article["body"] = split_text(article["body"], character_limit)
    return {
        "statusCode" : HTTPStatus.ACCEPTED,
        "body": {"article" : article}
    }