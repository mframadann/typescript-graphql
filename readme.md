![This is an image](./banner.png)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
## Simple GraphQL api implementation.
Simple GraphQL implementation, built using [GraphQL](https://graphql.org), [Prisma ORM](https://prisma.io), [Typescript](https://www.typescriptlang.org/) And [ExpressJS](https://expressjs.com/).

## Instalations
```shell
$ npm install
$ npm run build
$ npm start
```
or: 
```shell
npm install
npm run dev
```
##Usage
creating a new user and profile data
```graphql
mutation {
  createUsers(
    userInputs: {
      firstName: "Jhon" //string
      lastName: "Doe" //string
      gender: "Male" //string
      dateOfBirth: "2003-12-05" //date
      emailAddress: "jhondoe@gmail.com" //string
      password: "Password" //string
    }
  ){
    profile{
      first_name
      last_name
    }
  }
}
```