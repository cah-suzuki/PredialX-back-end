# Documentação API - PredialX

#

#

> Projeto backend desenvolvido para teste técnico para a empresa find me

### Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

##### Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

##### Ferramentas de gerenciamento de projeto utilizadas

#

| Ferramenta | Link                      |
| ---------- | ------------------------- |
| GitHub     | https://github.com/       |
| Notion     | https://www.notion.so/    |
| Diagrams   | https://app.diagrams.net/ |
| Trello     | https://trello.com/       |
| LinkTree   | https://linkr.bio/        |
| Slack      | https://slack.com/        |

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

Essa aplicação necessita do yarn instalado.E um banco de dados postgresql configurado

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
git clone <git@github...>
yarn install
yarn start
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Store](#1-cooperator)
  - [POST - /cooperator](#11-criação-de-cooperador)
  - [GET - /cooperator](#12-listando-cooperadores)
  - [GET - /cooperator/:id](#13-listar-cooperador-por-id)
  - [PATCH - /cooperator/:id](#14-atualizar-cooperador-por-id)
  - [DELETE - /cooperator/:id](#15-deletar-cooperador-por-id)
  - [POST - /cooperator/login](#16-efetuar-o-login-no-sistema)
- [Products](#2-client)
  - [POST - /client](#21-criação-de-cliente)
  - [GET - /client](#22-listando-clientes)
  - [GET - /client/:id](#23-listar-cliente-por-id)
  - [PATCH - /client/:id](#24-atualizar-cliente-por-id)
  - [DELETE - /client/:id](#25-deletar-cliente-por-id)
- [Orders](#3-order)
  - [POST - /order](#31-criação-de-ordem-de-serviço)
  - [GET - /order](#32-listando-ordem-de-serviço)
  - [GET - /order/:id](#33-listar-ordem-de-serviço-por-id)

---

## 1. **Cooperator**

[ Voltar para os Endpoints ](#4-endpoints)

O objeto Cooperator é definido como:

| Campo    | Tipo   | Descrição                         |
| -------- | ------ | --------------------------------- |
| id       | string | Identificador único do cooperador |
| name     | string | Nome do cooperador                |
| email    | string | Email do cooperador               |
| password | string | Senha do cooperador               |

### Endpoints

| Método | Rota              | Descrição                                                                             |
| ------ | ----------------- | ------------------------------------------------------------------------------------- |
| POST   | /cooperator       | Criação de um cooperador.                                                             |
| POST   | /cooperator/login | Login no sistema, retorna um token, passando o email e a senha no corpo da requisição |
| GET    | /cooperator       | Lista todos os cooperadores.                                                          |
| GET    | /cooperator/:id   | Lista um cooperador, usando seu ID como parâmetro                                     |
| PATCH  | /cooperator/:id   | Atualiza uma ou mais propriedades do cooperador, usando seu ID como parâmetro         |
| DELETE | /cooperator/:id   | Deleta uma cooperador, usando seu ID como parâmetro                                   |

---

### 1.1. **Criação de Cooperador**

[ Voltar para os Endpoints ](#4-endpoints)

### `/cooperator`

### Exemplo de Request:

```
POST /cooperator
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "id": "6",
  "name": "camila suzuki",
  "email": "camila1@camila.com",
  "password": "123"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "6",
  "name": "camila suzuki",
  "email": "camila1@camila.com",
  "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                                       |
| -------------- | ----------------------------------------------- |
| 409 Conflict   | This cooperator already exists in your database |

---

### 1.2. **Listando Cooperadores**

[ Voltar aos Endpoints ](#4-endpoints)

### `/cooperator`

### Exemplo de Request:

```
GET /cooperator
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "5",
    "name": "camila suzuki",
    "email": "camila@camila.com",
    "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
  },
  {
    "id": "6",
    "name": "camila suzuki",
    "email": "camila1@camila.com",
    "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
  }
]
```

### 1.3. **Listar cooperador por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/cooperator/:id`

### Exemplo de Request:

```
GET /cooperator/6
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| id        | string | Identificador único do cooperador |

### Possíveis Erros:

Id da loja incorreto.

```json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "6",
  "name": "camila suzuki",
  "email": "camila1@camila.com",
  "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
}
```

### Possíveis Erros:

| Código do Erro | Descrição            |
| -------------- | -------------------- |
| 404 Not Found  | Cooperator not found |

### 1.4. **Atualizar cooperador por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/cooperator/:id`

### Exemplo de Request:

```
PATCH /cooperator/6
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                          |
| --------- | ------ | ---------------------------------- |
| id        | string | Identificador único do colaborador |

### Corpo da Requisição:

```json
{
  "name": "camila suzuki do rosario",
  "email": "camila@gmail.com",
  "password": "nova senha"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": 6,
  "name": "camila suzuki do rosario",
  "email": "camila@gmail.com",
  "password": "nova senha"
}
```

### Possíveis Erros:

Id incorreto.

### 1.5. **Deletar colaborador por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/cooperator/:id`

### Exemplo de Request:

```
DELETE /cooperator/6
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                          |
| --------- | ------ | ---------------------------------- |
| id        | string | Identificador único do colaborador |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

///////////////////////////////////////////////////////////

### 1.7. **Efetuar o login no sistema**

[ Voltar aos Endpoints ](#4-endpoints)

### `/cooperator/login`

### Exemplo de Request:

```
POST /cooperator/login
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "camila1@camila.com",
  "password": "senhaForte"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbWlsYTFAY2FtaWxhLmNvbSIsImlhdCI6MTY2MTM4MDQ0OCwiZXhwIjoxNjYxNDY2ODQ4fQ.-bBUoYHsimSsf6Ui-OVNKBJyrlsE8V2TmJzuaMVTpSc",
  "user": {
    "id": 6,
    "name": "camila suzuki",
    "email": "camila1@camila.com",
    "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
  }
}
```

### Possíveis Erros:

Id ou senha(password) incorretos

#

#

#

---

## 2. **Client**

[ Voltar para os Endpoints ](#4-endpoints)

O objeto Client é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do cliente |
| name  | string | Nome do cliente                |

### Endpoints

| Método | Rota        | Descrição                                                                  |
| ------ | ----------- | -------------------------------------------------------------------------- |
| POST   | /client     | Criação de um cliente.                                                     |
| GET    | /client     | Lista todos os clientes.                                                   |
| GET    | /client/:id | Lista um cliente, usando seu ID como parâmetro                             |
| PATCH  | /client/:id | Atualiza uma ou mais propriedades do cliente, usando seu ID como parâmetro |
| DELETE | /client/:id | Deleta uma cliente, usando seu ID como parâmetro                           |

---

### 1.1. **Criação de Cliente**

[ Voltar para os Endpoints ](#4-endpoints)

### `/client`

### Exemplo de Request:

```
POST /client
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "id": 3,
  "name": "camila suzuki"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": 3,
  "name": "camila suzuki"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                                   |
| -------------- | ------------------------------------------- |
| 409 Conflict   | This client already exists in your database |

---

### 1.2. **Listando Clientes**

[ Voltar aos Endpoints ](#4-endpoints)

### `/client`

### Exemplo de Request:

```
GET /client
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": 2,
    "name": "Eduardo"
  },
  {
    "id": "3",
    "name": "camila suzuki"
  }
]
```

### 1.3. **Listar cliente por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/client/:id`

### Exemplo de Request:

```
GET /client/3
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| id        | string | Identificador único do client |

### Possíveis Erros:

Id do cliente incorreto.

```json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3",
  "name": "camila suzuki"
}
```

### Possíveis Erros:

| Código do Erro | Descrição            |
| -------------- | -------------------- |
| 404 Not Found  | Cooperator not found |

### 1.4. **Atualizar cliente por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/client/:id`

### Exemplo de Request:

```
PATCH /client/3
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do cliente |

### Corpo da Requisição:

```json
{
  "name": "camila suzuki do rosario"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": 3,
  "name": "camila suzuki do rosario"
}
```

### Possíveis Erros:

Id incorreto.

### 1.5. **Deletar cliente por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/client/:id`

### Exemplo de Request:

```
DELETE /client/3
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                          |
| --------- | ------ | ---------------------------------- |
| id        | string | Identificador único do colaborador |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

///////////////////////////////////////////////////////////

#

---

## 3. **Order**

[ Voltar para os Endpoints ](#4-endpoints)

O objeto Order é definido como:

| Campo         | Tipo   | Descrição                                                       |
| ------------- | ------ | --------------------------------------------------------------- |
| id            | string | Identificador único do pedido                                   |
| date          | date   | Data do cadastro do pedido                                      |
| issue_report  | string | Descrição do serviço prestado                                   |
| client_id     | string | Identificador único do cliente para qual o serviço foi prestado |
| cooperator_id | string | Identificador único do cooperador que prestou o serviço         |

### Endpoints

| Método | Rota       | Descrição                                     |
| ------ | ---------- | --------------------------------------------- |
| POST   | /order     | Criação de um pedido.                         |
| GET    | /order     | Lista todos os pedidos.                       |
| GET    | /order/:id | Lista um pedido, usando seu ID como parâmetro |

---

### 1.1. **Criação de Pedido**

[ Voltar para os Endpoints ](#4-endpoints)

### `/order`

### Exemplo de Request:

```
POST /order
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "id": 1,
  "date": "2019-03-01 00:00:00-06",
  "issue_report": "problema com a eletrica",
  "client_id": 2,
  "cooperator_id": 1
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": 2,
  "date": "2019-03-01 00:00:00-06",
  "issue_report": "problema com a eletrica",
  "client": {
    "id": 1,
    "name": "Eduardo"
  },
  "cooperator": {
    "id": 1,
    "name": "camila suzuki",
    "email": "camila@camila.com",
    "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição                                     |
| -------------- | --------------------------------------------- |
| 409 Conflict   | This order id already exists in your database |

---

### 1.2. **Listando Orders**

[ Voltar aos Endpoints ](#4-endpoints)

### `/order`

### Exemplo de Request:

```
GET /order
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": 1,
    "date": "2019-03-01 00:00:00-06",
    "issue_report": "problema com a eletrica...",
    "client": {
      "id": 2,
      "name": "Eduardo"
    },
    "cooperator": {
      "id": 1,
      "name": "camila suzuki",
      "email": "camila@camila.com",
      "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
    }
  },
  {
    "id": 2,
    "date": "2019-02-08 00:00:00-06",
    "issue_report": "problema com a hidraulica...",
    "client": {
      "id": 2,
      "name": "Eduardo"
    },
    "cooperator": {
      "id": 1,
      "name": "camila suzuki",
      "email": "camila@camila.com",
      "password": "123"
    }
  }
]
```

### 1.3. **Listar order por ID**

[ Voltar aos Endpoints ](#4-endpoints)

### `/order/:id`

### Exemplo de Request:

```
GET /order/1
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| id        | string | Identificador único do pedido |

### Possíveis Erros:

Id do pedido incorreto.

```json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": 1,
  "date": "2019-03-01 00:00:00-06",
  "issue_report": "problema com a eletrica...",
  "client": {
    "id": 2,
    "name": "Eduardo"
  },
  "cooperator": {
    "id": 1,
    "name": "camila suzuki",
    "email": "camila@camila.com",
    "password": "$2a$08$myPrQaJ67zbrtV9ZALLrhexF3qEA3N0qM7MDlwvkGuIoDXmF0QdYm"
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | Order not found |

///////////////////////////////////////////////////////////

#

#### Desenvolvido por

| Camila Suzuki | https://github.com/cah-suzuki |
