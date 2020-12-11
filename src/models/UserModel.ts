import { Schema, model } from 'mongoose';

const schema = new Schema({
  user_name: String,
  full_name: String,
  biography: String,
  is_private: Boolean,
  has_channel: Boolean,
  is_business_account: Boolean,
  business_category_name: String,
});

export default model('UserModel', schema);
