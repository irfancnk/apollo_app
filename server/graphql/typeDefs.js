const { gql } = require("apollo-server")

module.exports = gql`
    type Product {
        id: ID!
        title: String!
        label: String!
        price: Float!
        currency: String!
        description: String!
        images: Images!
        shipment: String!
    }

    type Images {
        small: Image!
        medium: Image!
        large: Image!
    }

    type Image {
        url: String!
        width: String!
        height: String!
    }

    type Query {
        products : [Product]!
        product(id: ID!) : Product
    }
`










