const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email: String
        _id: ID
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        user(username: String, _id: ID): User
    }
`;

module.exports = typeDefs;