export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    hashedPassword: String
    posts: [Post]
  }

  type Query {
    users: [User!]! @skipAuth
    user: User @skipAuth
  }

  input UpdateUserInput {
    email: String
    name: String
    hashedPassword: String
  }

  type Mutation {
    updateUser(input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
