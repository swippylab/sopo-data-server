import { ObjectType, Field, ID, InputType } from 'type-graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  _id!: string;

  @Field()
  writer!: string;
}

@InputType()
export class PostInput {
  @Field(() => ID)
  _id!: string;

  @Field()
  writer!: string;
}
