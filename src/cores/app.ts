import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import logger from "morgan";
import GraphSchemas from "./graph.schemas";
import GraphResolvers from "./graph.resolvers";

class TypeGraphQlApplication {
  public app: Application;
  public port: number;
  constructor() {
    this.app = express();
    this.port = 3000 || process.env.PORT;
    this.middlerwares();
    this.graphQL();
  }
  private graphQL(): void {
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema: GraphSchemas,
        rootValue: GraphResolvers,
        graphiql: true,
      })
    );
  }
  private middlerwares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(logger("dev"));
  }
}

export default new TypeGraphQlApplication();
