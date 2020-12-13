import Axios from 'axios';
import { Request, Response } from 'express';
import * as Yup from 'yup';

import { userModel } from './../models/UserModel';

class InstagramSearch {
  async search(req: Request, res: Response) {
    const { username } = req.params;

    const URL = `https://www.instagram.com/${username}/?__a=1`;

    const { data } = await Axios.get(URL).catch(() => ({} as any));

    if(!data) return res.status(200).json({error: 'USER_NOT_FOUND'});

    const userData = {
      profile_pic_url: data.graphql.user.profile_pic_url,
      username: data.graphql.user.username,
      full_name: data.graphql.user.full_name,
      biography: data.graphql.user.biography,
      external_url: data.graphql.user.external_url,
      is_joined_recently: data.graphql.user.is_joined_recently,
      is_private: data.graphql.user.is_private,
      has_channel: data.graphql.user.has_channel,
      is_business_account: data.graphql.user.is_business_account,
      business_category_name: data.graphql.user.business_category_name,
      follow: data.graphql.user.edge_follow.count,
      followed_by: data.graphql.user.edge_followed_by.count,
      timeline_media_count: data.graphql.user.edge_owner_to_timeline_media.count,
    };

    return res.status(200).json(userData);
  }
}

export default new InstagramSearch();
