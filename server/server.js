const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./typesdefs');
const { resolvers } = require('./resolvers');

async function startApolloServer() {

  const corsOptions = {
    origin: 'http://localhost:3000',
  };

  const server = new ApolloServer({
    typeDefs,
    cors: cors(corsOptions),
    resolvers,
  });
  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch((error) => {
  console.log(error, 'error');
})
