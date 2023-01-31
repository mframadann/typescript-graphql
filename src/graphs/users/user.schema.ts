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
`;

export const UsersMutations = `
  createUsers(userInputs: UsersInputs) : Users
`;

export const UsersQuery = `
  users: [Users!]!
`;
