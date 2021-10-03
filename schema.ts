const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require("graphql");

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      test: {
        type: GraphQLString,
        resolve: async function () {
          return new Date().getTime();
        },
      },
    }),
  })
});