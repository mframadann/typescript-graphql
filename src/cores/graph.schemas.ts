import { buildSchema } from "graphql";
import {
  UsersInputs,
  UsersMutations,
  UsersQuery,
  UsersSchema,
} from "../graphs";

export default buildSchema(
  `
    ${UsersInputs}
    ${UsersSchema}
    type RootQuery {
        ${UsersQuery}
    }
    type RootMutations {
      ${UsersMutations}
    }
    schema {
      query: RootQuery
      mutation: RootMutations
    }
  `
);
