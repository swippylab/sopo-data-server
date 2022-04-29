import { connectMongoDB } from './services/commons/mongodb';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PostResolver } from './services/post/resolver';
import { PostTypes } from './services/post/type';
import { UserTypes } from './services/user/type';
import { UserResolver } from './services/user/resolver';
import { MongoExampleTypes } from './services/mongoExample/type';
import { MongoExampleResolver } from './services/mongoExample/resolver';

const typeDefs = [PostTypes, UserTypes, MongoExampleTypes];
const resolvers = [PostResolver, UserResolver, MongoExampleResolver];

const port = 4000;

async function startServer() {
  const isConnectMongoDB = await connectMongoDB();
  if (!isConnectMongoDB) return;

  const server = new ApolloServer({ typeDefs, resolvers });
  console.log(`Server starting...`);
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
