FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

FROM node:18-alpine AS dev

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 8000

CMD npm run dev
