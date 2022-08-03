const { User } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        user: async (parent, { username, _id }) => {
            return User.findOne({
                $or: [{ username }, { _id }]
            })
            // .select('-__v -password')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            return user;
        }
    }
};

module.exports = resolvers;