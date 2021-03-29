import database from "./database";
import { ApolloServer, gql, IResolvers, ServerInfo } from "apollo-server";

const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team
    equipments: [Equipment]
    supplies: [Supply]
  }
  type Mutation {
    insertEquipment(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Boolean
    deleteEquipment(id: String): Equipment
  }
  type Team {
    id: Int 
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type Supply {
    id: String
    team: Int
  }
`;

const resolvers: IResolvers = {
  Query: {
    teams: () => database.teams
      .map(team => {
        team.supplies = database.supplies
          .filter(supply => supply.team === team.id);
        return team;
      }),
    team: (parent, args, context, info) => database.teams
      .filter((team) => team.id === args.id)[0],
    equipments: () => database.equipments,
    supplies: () => database.supplies
  },
  Mutation: {
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args);
      return true;
    },
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments
        .filter(equipment => equipment.id === args.id)[0];
      database.equipments = database.equipments
        .filter(equipment => equipment.id !== args.id);
      return deleted;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((res: ServerInfo) => {
  console.log(res.url);
});