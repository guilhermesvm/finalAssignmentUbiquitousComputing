# User API - NestJS + Prisma + PostgreSQL (Single API)

This project contains a NestJS API using Prisma for persistence against PostgreSQL.
It's configured to run a single API instance (no gateway) inside Docker Compose.

Routes:
- POST /users -- create user
- GET /users -- list users
- GET /users/:id -- get user by id
- PUT /users/:id -- update user
- DELETE /users/:id -- delete user

Start:
```bash
docker compose up --build
```

API will be exposed on http://localhost:3000
