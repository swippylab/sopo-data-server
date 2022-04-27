import './feature/common/mongodb';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PostResolver } from './feature/post/resolver';
import { PostTypes } from './feature/post/type';
import { UserTypes } from './feature/user/type';
import { UserResolver } from './feature/user/resolver';
import { MongoExampleTypes } from './feature/mongoExample/type';
import { MongoExampleResolver } from './feature/mongoExample/resolver';

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
