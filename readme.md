![This is an image](./banner.png)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
## Simple GraphQL api implementation.
Simple GraphQL implementation, built using [GraphQL](https://graphql.org), [Prisma ORM](https://prisma.io), [Typescript](https://www.typescriptlang.org/) And [ExpressJS](https://expressjs.com/).

## Instalations
with building: 
```shell
$ npm install
$ npm run build
$ npm start
```
or without building: 
```shell
npm install
npm run dev
```
## Usage
creating a new user and profile data
```graphql
mutation {
  createUsers(
    userInputs: {
      firstName: "Jhon" 
      lastName: "Doe" 
      gender: "Male" 
      dateOfBirth: "2003-12-05" 
      emailAddress: "jhondoe@gmail.com" 
      password: "Password" 
    }
  ){
    ##your selected fileds. example:
    email_address
    profile {
      first_name
      last_name
    }
  }
}
```
Getting all users data:
```graphql
query {
  ## your queries name. example: 
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

Getting all users data with profile: 
```graphql
query {
  users {
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
server will give a response:
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