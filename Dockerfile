FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y libkrb5-dev && rm -rf /var/lib/apt/lists/*

ADD package.json /usr/src/app/
RUN npm install

ADD . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]