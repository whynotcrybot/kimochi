FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

CMD ["yarn", "dev"]

