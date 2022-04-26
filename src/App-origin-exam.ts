import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Query {
    bookByTitle(title: String): Book
  }

  type Mutation {
    addBook(title: String, author: String): Int
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: (parent: object, args: object, context: object, info: object) => {
      return books;
    },
    bookByTitle: (parent: object, args: object, context: object, info: object) => {
      const title = Object(args)['title'];
      for (const book of books) {
        if (book.title === title) {
          return book;
        }
      }
      return { title: null, author: null };
    },
  },
  Mutation: {
    addBook: (
      parent: object,
      args: { title: string; author: string },
      context: object,
      info: object,
    ) => {
      return books.push(args);
    },
  },
};

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
