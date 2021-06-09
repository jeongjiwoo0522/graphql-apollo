import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./gql/typeDefs";
import { resolvers } from "./gql/resolvers";

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.get("/", (req, res) => res.end("PhotoShare API에 오신 것을 환영합니다."));

app.listen(4000, () => {
  console.log(`GraphQL Server running @ http://localhost:4000${server.graphqlPath}`)
}); 