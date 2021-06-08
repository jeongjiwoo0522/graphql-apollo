import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  enum PhotoCategory {
    SELFIE
    PORTRAIT
    ACTION
    LANDSCAPE
    GRAPHIC
  }

  input PostPhotoInput {
    name: String!
    category: PhotoCategory=PORTRAIT
    description: String
  }

  type User {
    githubLogin: ID!
    name: String
    avatar: String
    postedPhotos: [Photo!]!
  }

  type Photo {
    id: ID!
    url: String
    name: String!
    description: String
    category: PhotoCategory!
    postedBy: User!
  }

  type Query {
    totalPhotos: Int!
    allPhotos: [Photo!]!
  }

  type Mutation {
    postPhoto(input: PostPhotoInput!): Boolean!
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