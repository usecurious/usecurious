# Application Dockerfile

# Set the base image to Latest Node
FROM node:6.9.4

# System Dependencies
RUN apt-get update
RUN apt-get install -y build-essential git tar python libkrb5-dev
RUN apt-get autoclean

# Create Install Folder
RUN ["mkdir", "/install"]

ADD ["./package.json", "/install"]
WORKDIR /install
RUN npm install --verbose
ENV NODE_PATH=/install/node_modules

# Change Working Directory to App Folder
WORKDIR /usr/src/app
ADD . /usr/src/app

# Open 3000 in dev
EXPOSE 3000

# Run Node Application
ENTRYPOINT  ["node", "/usr/src/app/keystone.js"]