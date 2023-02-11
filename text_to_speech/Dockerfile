FROM python:3.9

RUN apt-get update && apt-get install -y ffmpeg
RUN pip install pydub requests gcsfs flask
ARG PLAY_API_KEY
ENV PLAY_API_KEY="${PLAY_API_KEY}"
COPY  main.py main.py
ENTRYPOINT python main.py