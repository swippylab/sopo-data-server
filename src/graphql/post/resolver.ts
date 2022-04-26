import 'reflect-metadata';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Post, PostInput } from './type';

@Resolver()
export class PostResolver {
  @Query(() => Post)
  async getPost() {
    const post: Post = {
      _id: 'id_A',
      writer: 'A',
    };
    return await post;
  }

  @Mutation(() => Int)
  async insertPost(@Arg('newPost') post: PostInput) {
    console.log(post);
    return 1;
  }
}
