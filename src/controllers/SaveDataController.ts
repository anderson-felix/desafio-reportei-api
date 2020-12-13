import { Request, Response } from 'express';

import {userModel} from '../models/UserModel';

class SaveDataController {
  async store(req:Request, res:Response) {
    const {userData} = req.body;

    let user = await userModel.findOne({username: userData.username}).exec()

    if(!user) user = new userModel()

    Object.assign(user,userData)

    await user.save()

    return res.status(201).json(true)
  }
}

export default new SaveDataController();
