FROM node:slim

RUN npm install redis

COPY . /

ENTRYPOINT [ "node" ]
COMMAND [ "server.js" ]
