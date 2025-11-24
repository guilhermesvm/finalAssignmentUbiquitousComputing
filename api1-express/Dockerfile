FROM node:18-alpine3.18

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --production

COPY prisma ./prisma
COPY src ./src

# Gera apenas o Prisma Client
RUN npx prisma generate

EXPOSE 3000

# Agora sim – roda migrate depois que o Postgres já estiver pronto
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]
