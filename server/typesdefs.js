const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type People {
      name: String
      city: String
      email: String
      phone: String
    }
    
    type Query {
      hello: String
      people: [People]
    }
`;
