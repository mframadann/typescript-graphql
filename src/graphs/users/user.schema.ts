export const UsersSchema = `
  type Users {
    user_id: ID!
    email_address: String!
    password: String!
    created_at: Date!
    profile: Profiles!
  }
`;

export const UsersInputs = `
  input UsersInputs {
    user_id: ID
    emailAddress: String!,
    password: String!
    firstName: String!
    lastName: String!
    phoneNumber: String
    gender: String!
    dateOfBirth: String!
  }

  input UserInput {
    user_id: ID!
  }
`;

export const UsersMutations = `
  createUsers(userInputs: UsersInputs) : Users
  findUserById(userInputs: UserInput): Users
`;

export const UsersQuery = `
  users: [Users!]!
`;
