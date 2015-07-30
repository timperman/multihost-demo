FROM node:slim

RUN npm install redis

COPY . /

ENTRYPOINT [ "node" ]
CMD [ "server.js" ]
