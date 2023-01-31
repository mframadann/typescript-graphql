import { buildSchema } from "graphql";
import {
  UsersInputs,
  UsersMutations,
  UsersQuery,
  UsersSchema,
} from "../graphs";
import {
  ProfileInputs,
  ProfileMutations,
  ProfileQuery,
  ProfileSchema,
} from "../graphs/profiles";

export default buildSchema(`
    scalar Date
    ${UsersInputs}
    ${UsersSchema}
    ${ProfileInputs}
    ${ProfileSchema}
    type RootQuery {
        ${UsersQuery}
        ${ProfileQuery}
    }
    type RootMutations {
      ${UsersMutations}
      ${ProfileMutations}
    }
    schema {
      query: RootQuery
      mutation: RootMutations
    }
`);
