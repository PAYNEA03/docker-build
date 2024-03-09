FROM python:alpine3.18

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

ARG FRONTEND
ENV FRONTEND=${FRONTEND}
RUN echo "Oh dang look at that $FRONTEND"

CMD [ "gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app" ]