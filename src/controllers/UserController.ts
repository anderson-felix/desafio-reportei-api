import Axios from 'axios';
import { Request, Response } from 'express';
import * as Yup from 'yup';

import UserModel from '../models/UserModel';

class SessionController {
  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      user_name: Yup.string().required(),
      full_name: Yup.string().required(),
      biography: Yup.string(),
      is_private: Yup.boolean(),
      has_channel: Yup.boolean(),
      is_business_account: Yup.boolean(),
      business_category_name: Yup.string(),
    });
    const URL = 'https://www.instagram.com/derso.f/?__a=1';

    const { data } = await Axios.get(URL).catch(() => ({} as any));

    const {
      username,
      full_name,
      biography,
      is_private,
      has_channel,
      is_business_account,
      business_category_name,
    } = data.graphql.user;

    const userData = {
      username,
      full_name,
      biography,
      is_private,
      has_channel,
      is_business_account,
      business_category_name,
    };

    if (!(await schema.isValid(userData))) {
      return res.status(400).json({ error: 'Validation Error' });
    }

    let user = UserModel.find({ username });

    if (user) {
      return res
        .status(401)
        .json({ error: `User : ${username} already exists` });
    }

    await UserModel.create({ userData });

    console.log(userData);
  }
}
