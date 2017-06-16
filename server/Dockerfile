FROM node:7.9.0-alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app

EXPOSE 3000

CMD yarn starts
