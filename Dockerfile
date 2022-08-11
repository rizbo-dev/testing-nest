FROM node:16-alpine

RUN npm install -g @nestjs/cli

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN yarn install

COPY --chown=node:node . ./

USER node