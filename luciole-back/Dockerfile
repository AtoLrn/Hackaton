FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

FROM node:18-alpine AS dev

WORKDIR /app

COPY . .

EXPOSE 3000

CMD npm run start:dev
