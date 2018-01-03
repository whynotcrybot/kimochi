FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN yarn --pure-lockfile
RUN yarn build
RUN rm -rf source

CMD ["yarn", "start"]
