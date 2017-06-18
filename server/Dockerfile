FROM node:7.10.0-alpine

MAINTAINER Alex Katsero <alexanderkatsero@gmail.com> <https://github.com/whynotcrybot>

# create app directory in container and set to be default
RUN mkdir -p /app
WORKDIR /app

ADD package.json yarn.lock /app/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

COPY . /app

# build dist
RUN yarn build

# remove source files
RUN rm -rf source

EXPOSE 3000

# cmd to start service
CMD ["yarn", "start"]
