const { User, Book } = require('../models/');

const resolvers = {
    Query: {
        user: async (parent, { username, _id }) => {
            return User.findOne({
                $or: [{ username }, { _id }]
            })
            // .select('-__v -password')
        }
    }
};

module.exports = resolvers;