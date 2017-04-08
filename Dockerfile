FROM node:latest

RUN npm install -g nodemon

WORKDIR /app
COPY . /app

RUN npm install
CMD npm start
