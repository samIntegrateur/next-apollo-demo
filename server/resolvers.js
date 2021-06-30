const { people } = require('./people');

exports.resolvers = {
    Query: {
        hello: () => 'Hello world!',
        people: () => people(),
    },
};