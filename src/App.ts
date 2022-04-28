import './service/common/mongodb';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PostResolver } from './service/post/resolver';
import { PostTypes } from './service/post/type';
import { UserTypes } from './service/user/type';
import { UserResolver } from './service/user/resolver';
import { MongoExampleTypes } from './service/mongoExample/type';
import { MongoExampleResolver } from './service/mongoExample/resolver';

const typeDefs = [PostTypes, UserTypes, MongoExampleTypes];
const resolvers = [PostResolver, UserResolver, MongoExampleResolver];

const port = 4000;

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
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
