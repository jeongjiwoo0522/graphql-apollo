import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

const typeDefs = gql`
  scalar DateTime

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
    inPhotos: [Photo!]!
  }

  type Photo {
    id: ID!
    url: String
    name: String!
    description: String
    category: PhotoCategory!
    postedBy: User!
    taggedUsers: [User!]!
    created: DateTime!
    addPhotos(after: DateTime): [Photo!]!
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

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.get("/", (req, res) => res.end("PhotoShare API에 오신 것을 환영합니다."));

app.listen(4000, () => {
  console.log(`GraphQL Server running @ http://localhost:4000${server.graphqlPath}`)
})