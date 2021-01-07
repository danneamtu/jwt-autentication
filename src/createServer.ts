import { ApolloServer, gql } from "apollo-server-express"

const typeDefs = gql`
  type User {
    id: string!
    username: string!
    email: string!
    password: string!
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`
interface InputArgs {
  username: string
  email: string
  password: string
}

const users = [{ id: "121", username: "Jane", email: "Alex@fmail.co", password: "ana" }]

const resolvers = {
  Query: {
    users: () =>
  },
  Mutation: {
    createUser: (_: any, args: { username: string }) => {
      const { username, email, password } = args
    },
  },
}

export default () => {
  return new ApolloServer({ typeDefs, resolvers })
}
