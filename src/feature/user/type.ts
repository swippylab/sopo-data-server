import { gql } from 'apollo-server-express';

export const UserTypes = gql`
  type User {
    _id: String
    name: String
  }

  type Query {
    getUser(_id: String): User
  }
`;
