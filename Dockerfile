FROM node:latest as build-front

WORKDIR /build

COPY luciole/package.json ./package.json

RUN npm i

COPY luciole/ .

RUN npm run build-only

FROM node:latest as build-back

WORKDIR /build

COPY luciole-back/package.json ./package.json

RUN npm i

COPY luciole-back/ .
COPY luciole-back/.env ./.env
COPY --from=build-front /build/dist ./public

RUN npm run build

FROM node:latest as prod

WORKDIR /opt

COPY luciole-back/package.json .
RUN npm i

COPY --from=build-back /build/dist/ ./dist
COPY luciole-back/.env ./.env
COPY luciole-back/tsconfig.json .

CMD [ "npm", "run", "start" ] 