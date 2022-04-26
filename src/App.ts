import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PostResolver } from './graphql/post/resolver';

const port = 4000;

async function startServer() {
  const schema = await buildSchema({
    resolvers: [PostResolver],
  });
  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();
  server.applyMiddleware({
    app,
    path: '/',
  });

  await new Promise<void>((r) => app.listen({ port: port }, r));

  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startServer();
