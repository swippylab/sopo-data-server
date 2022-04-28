import { gql } from 'apollo-server-express';

export const MongoExampleTypes = gql`
  type Example {
    name: String
    age: Int
  }

  type Query {
    getExample(name: String): Example
  }
`;
