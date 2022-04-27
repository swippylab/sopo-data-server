import { gql } from 'apollo-server-express';

export const PostTypes = gql`
  type Post {
    _id: String
    writer: String
  }

  input PostInput {
    writer: String
  }

  type Query {
    postArray: [Post]
    postById(_id: String): Post
  }

  type Mutation {
    addPost(post: PostInput): Int
  }
`;
