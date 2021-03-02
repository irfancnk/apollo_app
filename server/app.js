const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const products = require('./products.json');

/**
 * Resolvers for the graphql requests
 */
const resolvers = {
    Query: {
        products: () => products,
        product: (parent, { id }) => {
            return products.filter(x => x.id === id)[0]
        }
    },
};

/**
 * ApolloServer instantiation
 */
const server = new ApolloServer({
    typeDefs,
    resolvers
});

/**
 * Main listener for GraphQL requests
 */
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
