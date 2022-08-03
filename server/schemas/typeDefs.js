const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email: String
        _id: ID
    }

    type Query {
        user(username: String, _id: ID): User
    }
`;

module.exports = typeDefs;