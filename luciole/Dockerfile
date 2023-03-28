FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

#FROM node:18-alpine AS builder

#WORKDIR /app

#COPY --from=deps /app/node_modules ./node_modules
#COPY . .

#RUN npm run build

#FROM nginx:1.23-alpine AS prod

#WORKDIR /app
#COPY --from=builder /app/dist /usr/share/nginx/html

#EXPOSE 80

FROM node:18-alpine AS dev

WORKDIR /app

COPY . .

EXPOSE 8000

CMD npm run dev
