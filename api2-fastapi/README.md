# Desenvolvimento de APIs e Testes de Desempenho

### **Trabalho Prático + Artigo**

### **Trabalho Final de Ubiquitous Computing**

**Prazo de entrega:** 25 de Novembro
**Entrega:** Moodle (Projeto + Artigo)
**Artigo:** Máximo **3 páginas**, no modelo **LaTeX da UPF**
**Apresentação:** 5 minutos (resultados)
Pode ser feito **individualmente, em dupla ou trio** — *nota igual para todos do grupo*.

---

## Objetivo

Desenvolver e comparar **duas implementações de uma API de usuários**, utilizando:

* **Duas linguagens de programação diferentes**, **ou**
* **Dois frameworks distintos** da mesma linguagem.

O foco está nas diferenças de **desempenho**, **escalabilidade** e **integração com banco de dados**.

---

## Descrição Geral

O grupo deve desenvolver **duas APIs independentes**, ambas com a mesma funcionalidade:

* Persistência e gerenciamento da entidade **Users** em um **PostgreSQL**.
* Capacidade de **escalar** a solução com múltiplos containers.
* Uso de um **gateway** para direcionamento das requisições.

Ao final, realizar **testes de carga e estresse** (sugestão: Apache JMeter) e produzir um **artigo técnico** no modelo **LaTeX da UPF**.

---

## Entidade Base: Users

| Campo    | Tipo    | Descrição                      |
| -------- | ------- | ------------------------------ |
| id       | Inteiro | Identificador único do usuário |
| name     | Texto   | Nome completo                  |
| email    | Texto   | Endereço de e-mail             |
| user     | Texto   | Nome de usuário (login)        |
| password | Texto   | Senha (hash ou texto)          |

---

## Requisitos Técnicos

### 1. **APIs**

Criar **duas APIs RESTful**, seguindo um dos formatos:

* **Opção A:** duas linguagens diferentes (Go + Python, Node.js + Java, etc.)
* **Opção B:** dois frameworks diferentes (Express + NestJS, Flask + FastAPI, Spring Boot + Micronaut, etc.)

Cada API deve oferecer:

```
POST   /users       → cria usuário  
GET    /users       → lista usuários  
GET    /users/{id}  → busca usuário por ID  
PUT    /users/{id}  → atualiza usuário  
DELETE /users/{id}  → remove usuário
```

---

### 2. **Persistência**

* Banco: **PostgreSQL**
* Cada API deve ter **seu próprio schema**
* Tabelas criadas automaticamente (**ORM** ou **migrations**)

---

### 3. **Gateway**

Implementar um gateway para possibilitar escalabilidade.
O artigo deve descrever:

* Algoritmo utilizado (Ex.: Round Robin, Least Connections etc.)
* Justificativa da escolha

---

### 4. **Contêineres**

Criar:

* Um **Dockerfile para cada API**
* Um **Dockerfile para o gateway**
* Um **docker-compose.yml** contendo:

  * Múltiplas instâncias das APIs
  * O gateway
  * O PostgreSQL
  * Todo o ambiente deve subir com:

```
docker compose up
```

---

## Testes de Desempenho

Utilizando Apache JMeter (ou equivalente), realizar:

### **Cenários**

* Múltiplas requisições simultâneas
* Testes automatizados reproduzíveis

### **Tipos de Teste**

* **Carga:** aumento gradual de usuários simultâneos
* **Estresse:** identificar o ponto de saturação

### **Métricas coletadas**

* Tempo médio de resposta
* Throughput (req/s)
* % de erros
* Consumo de CPU e memória

---

## Estrutura do Artigo Final

1. **Introdução** — Contexto e objetivos
2. **Implementação** — Explicação técnica das APIs, gateway e banco
3. **Testes & Resultados** — Tabelas, gráficos e análises
4. **Conclusão** — Lições aprendidas e considerações finais
5. **Referências** — Formato ABNT

O arquivo LaTeX deve **compilar sem erros** e gerar um **PDF final**.