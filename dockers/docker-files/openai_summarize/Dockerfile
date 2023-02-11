FROM python:3.10
ADD ./app/requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt
ADD ./app /app/
CMD python app.py
