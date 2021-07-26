// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ride, Scooter, User } = initSchema(schema);

export {
  Ride,
  Scooter,
  User
};