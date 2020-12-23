import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';

import { db } from '../utils/db';

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
  @prop({ required: true, unique: true, type: String })
  username: string;

  @prop({ required: true, type: String })
  profile_pic_url: string;

  @prop({ required: true, type: String })
  full_name: string;

  @prop({ type: String })
  biography: string;

  @prop({ type: String })
  external_url: string;

  @prop({ required: true, type: Boolean })
  is_joined_recently: boolean;

  @prop({ required: true, type: Boolean })
  is_private: boolean;

  @prop({ required: true, type: Boolean })
  has_channel: boolean;

  @prop({ required: true, type: Boolean })
  is_business_account: boolean;

  @prop({ type: String })
  business_category_name: string;

  @prop({ required: true, min: 0, type: Number })
  follow: number;

  @prop({ required: true, min: 0, type: Number })
  followed_by: number;

  @prop({ required: true, min: 0, type: Number })
  timeline_media_count: number;
}

export const userModel = getModelForClass(User);

userModel.db = db;
