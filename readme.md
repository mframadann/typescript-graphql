![This is an image](./banner.png)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
## Simple GraphQL api implementation.
Simple GraphQL implementation, built using [GraphQL](https://graphql.org), [Prisma ORM](https://prisma.io), [Typescript](https://www.typescriptlang.org/) And [ExpressJS](https://expressjs.com/).

## Instalations
installing the dependencies:
```shell
$ npm install
```
push prisma schema to database:
```shell
$ npx prisma db push
```
with building: 
```shell
$ npm run build
$ npm start
```
or without building: 
```shell
$ npm run dev
```
## Usage
Open [http://localhost:yourport/graphql](http://localhost:yourport/graphql) in your browser and creating a new user and profile data
```graphql
mutation {
  createUsers(
    userInputs: {
      firstName: "Shina" 
      lastName: "Mahiru" 
      gender: "Female" 
      dateOfBirth: "2003-12-05" 
      emailAddress: "shinamahiru@gmail.com" 
      password: "Password" 
    }
  ){
    ##your selected fileds. for example:
    email_address
    profile {
      first_name
      last_name
    }
  }
}
```
### Getting all users data:
```graphql
query {
  ## your queries name. for example: 
  users {
    ## select the fields you want. for example
    user_id
    email_address
  }
}
```
and server will be give a responses: 
```json
{
  "data": {
    "users": [
      {
        "user_id": "3",
        "email_address": "shinamahiru@gmail.com",
      },
      {
        "user_id": "4",
        "email_address": "kanade@gmail.com",
      },
      {
        "user_id": "5",
        "email_address": "kagari@gmail.com",
      }
    ]
  }
}
```

### Getting all users data with profile: 
```graphql
query {
  ## your queries name. for example: 
  users {
    ## select the fields you want. for example
    user_id
    email_address
    profile {
      first_name
      last_name
      gender
    }
  }
}
```
server will give a responses:
```json
{
  "data": {
    "users": [
      {
        "user_id": "3",
        "email_address": "shinamahiru@gmail.com",
        "profile": {
          "first_name": "Shina",
          "last_name": "Mahiru",
          "gender": "Female"
        }
      },
      {
        "user_id": "4",
        "email_address": "kanade@gmail.com",
        "profile": {
          "first_name": "Tachibana",
          "last_name": "Kanade",
          "gender": "Female"
        }
      },
      {
        "user_id": "5",
        "email_address": "kagari@gmail.com",
        "profile": {
          "first_name": "Kagari",
          "last_name": "Ayaka",
          "gender": "Female"
        }
      }
    ]
  }
}
```

### Get user by id with profile 
```graphql
mutation {
  findUserById(
    userInputs: { user_id : 3}
  ){
    ## select the fields you want. for example
    email_address
    profile {
      first_name
      last_name
      last_updated
    }
  }
}
```
server will give a response: 
```json
{
  "data": {
    "findUserById": {
      "email_address": "shinamahiru@gmail.com",
      "profile": {
        "first_name": "Shina",
        "last_name": "Mahiru",
        "last_updated": "2023-01-31T03:27:53.217Z"
      }
    }
  }
}
```
### Get profiles data with the user: 
```graphql
query {
  ## your queries name. for example: 
  profiles {
    ## select the fields you want. for example
    first_name
    last_name
    gender
    last_updated
    user {
      email_address
      created_at
    }
  }
}
```
server will give a response: 
```json
{
  "data": {
    "profiles": [
      {
        "first_name": "Shina",
        "last_name": "Mahiru",
        "gender": "Female",
        "last_updated": "2023-01-31T03:27:53.217Z",
        "user": {
          "email_address": "shinamahiru@gmail.com",
          "created_at": "2023-01-31T03:27:53.217Z"
        }
      },
      {
        "first_name": "Tachibana",
        "last_name": "Kanade",
        "gender": "Female",
        "last_updated": "2023-01-31T04:19:07.267Z",
        "user": {
          "email_address": "kanade@gmail.com",
          "created_at": "2023-01-31T04:19:07.267Z"
        }
      },
      {
        "first_name": "Kagari",
        "last_name": "Ayaka",
        "gender": "Female",
        "last_updated": "2023-01-31T04:19:52.695Z",
        "user": {
          "email_address": "kagari@gmail.com",
          "created_at": "2023-01-31T04:19:52.695Z"
        }
      }
    ]
  }
}
```

visit [https://graphql.org](https://graphql.org) for more documentations & [Click this](https://instagram.com/mframadann) to connect me in insragram. thank you:D

