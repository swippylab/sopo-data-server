import { Example, QueryGetExampleArgs, Resolvers } from '../commons/graphql-type';
import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema<Example>(
  {
    name: String,
    age: String,
  },
  {
    strict: false,
    //versionKey: false
  },
);

const exampleModel = mongoose.model('examples', exampleSchema);

export const MongoExampleResolver: Resolvers = {
  Query: {
    getExample: getExample,
  },
};

async function getExample(parent: object, args: Partial<QueryGetExampleArgs>): Promise<Example> {
  console.log('getExample', args.name);
  const example = await exampleModel.findOne({ name: args.name });
  return example as any;
}
