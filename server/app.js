const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const products = require('./products.json');


const resolvers = {
    Query: {
        products: () => products,
        product: (parent, { id }) => {
            return products.filter(x => x.id === id)[0]
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});






























// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
// `;
// const books = [
//     {
//         title: 'The Awakening',
//         author: 'Kate Chopin',
//     },
//     {
//         title: 'City of Glass',
//         author: 'Paul Auster',
//     },
// ];

// const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });
