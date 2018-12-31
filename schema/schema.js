const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;
const _ = require("lodash");

const users = [
  { id: "47", firstName: "Samantha", age: 21 },
  { id: "49", firstName: "John", age: 50 },
  { id: "59", firstName: "Donovan", age: 30 },
  { id: "23", firstName: "Bill", age: 20 }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (parentValue, args) => _.find(users, { id: args.id })
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
