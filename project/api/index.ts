import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    totalPhotos: Int!
  }
`;

const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(res => console.log(`GraphQL Server running on ${res.url}`));