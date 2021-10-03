const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require("graphql");

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      alphabet: {
        type: GraphQLString,
        resolve: async function () {
          return new Date().getTime();
        },
      },
    }),
  })
});