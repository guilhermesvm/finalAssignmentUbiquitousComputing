# API Node + Express + Prisma + Docker

Uma API REST utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**, totalmente conteinerizada com **Docker Compose**.  
O projeto oferece um CRUD completo de usuários e inclui ferramentas de visualização e administração do banco via **Prisma Studio**.

---

## Tecnologias utilizadas

- **Node.js** + **Express**
- **Docker** e **Docker Compose**
- **PostgreSQL**
- **Prisma ORM**
- **Nodemon**
- **Prisma Studio**

---

# Como rodar o projeto

A forma mais simples e direta para subir o ambiente completo:


## 1️⃣ Subir todos os containers

Na raiz do projeto:

```bash
docker compose up
```

## 1️⃣ Aplicar as migrações do Prisma

```bash
docker exec -it api1 npx prisma migrate dev --name init
```

## 3️⃣ Abrir o Prisma Studio (opcional)

```bash
docker exec -it api1 sh
npx prisma studio --port 5555 --hostname 0.0.0.0
```

Acesse: http://localhost:5555

## Testando a API (Postman)

Base URL api1: http://localhost:3001

## Endpoints

- GET /users

Lista todos os usuários.

- GET /users/:id 

Busca um usuário específico pelo ID.

- POST /users

Cria um novo usuário.

- PUT /users/:id

Atualiza um usuário existente.

- DELETE /users/:id

Remove um usuário do sistema.