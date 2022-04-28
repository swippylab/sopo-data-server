import mongoose from 'mongoose';

const mongodbID = 'sopoUser';
const mongodbPW = 'swippylabMongoSopoUser0324';
const mongodbIP = '221.140.130.206';
const mongodbPort = '27001';
const mongodbDatabase = 'sopo';

mongoose
  .connect(
    `mongodb://${mongodbID}:${mongodbPW}@${mongodbIP}:${mongodbPort}/${mongodbDatabase}?authSource=${mongodbDatabase}`,
  )
  .then(() => {
    console.log(`🍃 Mongodb ready at mongodb://${mongodbIP}:${mongodbPort}/${mongodbDatabase}`);
  })
  .catch((err) => {
    console.log(err);
  });
