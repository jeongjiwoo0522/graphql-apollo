import { ApolloServer, gql, ServerInfo } from "apollo-server";

const typeDefs = gql`
  type Query {
    increase: [Counter]
    decrease: Counter
  }

  type Counter {
    num: Int 
  }
`;

const resolvers = {
  Query: {
    increase: () => [{ num: 3 }],
    decrease: () => { num: 5 }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen("4004").then((res: ServerInfo) => {
  console.log(res.url);
});