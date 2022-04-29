import { Resolvers, Post, QueryPostByIdArgs, MutationAddPostArgs } from '../commons/graphql-type';

export const PostResolver: Resolvers = {
  Query: {
    postArray: postArray,
    postById: postById,
  },
  Mutation: {
    addPost: addPost,
  },
};

function postArray(): Post[] {
  console.log('postArray');
  return [];
}

function postById(parent: object, args: Partial<QueryPostByIdArgs>): Post {
  console.log('postById', args._id);
  return {};
}

function addPost(parent: object, args: Partial<MutationAddPostArgs>): number {
  console.log('addPost', args.post);
  return 1;
}
