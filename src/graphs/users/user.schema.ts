export const UsersSchema = `
  type Users {
    user_id: ID!
    email_address: String!,
    password: String!
  }
`;

export const UsersInputs = `
  input UsersInputs {
    user_id: ID
    emailAddress: String!,
    password: String!
  }
`;

export const UsersMutations = `
  createUsers(userInputs: UsersInputs) : Users
`;

export const UsersQuery = `
  users: [Users!]!
`;
