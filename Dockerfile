FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt /app/
COPY manage.py /app/
COPY articles /app/articles
COPY news /app/news
RUN pip install -r requirements.txt
#COPY . /code/
