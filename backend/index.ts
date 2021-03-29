import database from "./database";
import { ApolloServer, gql, ServerInfo } from "apollo-server";

const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int 
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`;

const resolvers = {
  Query: {
    teams: () => database.teams
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((res: ServerInfo) => {
  console.log(res.url);
});