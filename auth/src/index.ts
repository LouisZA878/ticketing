import mongoose from 'mongoose'
import { app } from './app'
const start = async () => {
  if (!process.env.JWT_KEY){
    throw new Error('JWT KEY must be defined')
  }

  if(!process.env.MONGO_URI){
    throw new Error('must supply a mongo uri env')
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }
  console.log('Starting up')

  app.listen(3000, () => {
    console.log('Listening on port 3000... Auth');
  });
};

start();