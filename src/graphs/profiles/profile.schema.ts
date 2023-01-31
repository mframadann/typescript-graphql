export const ProfileSchema = `
  type Profiles {
    profile_id: ID!
    first_name: String!,
    last_name: String!
    phone_number: String
    gender: String!
    date_of_birth: Date
    last_updated: Date
    user: Users!
  }
`;
export const ProfileInputs = `
  input ProfileInputs {
    firstName: String!
    lastName: String
    phoneNumber: String
  }
`;
export const ProfileMutations = `
  createProfile(profileInputs: ProfileInputs) : Profiles
`;
export const ProfileQuery = `
  profiles: [Profiles!]!
`;
