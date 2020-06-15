
import { schema } from 'normalizr';

const userSchema = new schema.Entity('user');
const userListSchema = new schema.Array(userSchema);
const userDetailsSchema = new schema.Entity('user');

const Schemas = {
  USER: userSchema,
  USERLIST: userListSchema,
  USERDETAILS: userDetailsSchema,
};

export default Schemas;
