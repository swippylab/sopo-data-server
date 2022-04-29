import { QueryGetUserArgs, Resolvers, User } from '../commons/graphql-type';

export const UserResolver: Resolvers = {
  Query: {
    getUser: getUser,
  },
};

function getUser(parent: object, args: Partial<QueryGetUserArgs>): User {
  console.log('getUser', args._id);
  return {};
}
