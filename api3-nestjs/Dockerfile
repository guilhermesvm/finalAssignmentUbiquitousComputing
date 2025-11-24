FROM node:18-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++

COPY package.json package-lock.json* ./
RUN npm install --production=false
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./
RUN npx prisma generate
RUN npm run build

FROM node:18-slim
WORKDIR /app
RUN apt-get update && apt-get install -y openssl ca-certificates
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY prisma ./prisma
COPY package.json ./package.json
EXPOSE 3000
CMD npx prisma generate && npx prisma db push --accept-data-loss && node dist/main.js
