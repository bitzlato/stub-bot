FROM node:16-alpine AS build-env

WORKDIR /app

COPY package.json yarn.lock .nvmrc /app/
COPY /src/ /app/src/
COPY /templates/ /app/templates/

RUN yarn

CMD yarn start
