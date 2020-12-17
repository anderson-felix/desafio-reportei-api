'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const UserModel_1 = require('../models/UserModel');
class SaveDataController {
    async store(req, res) {
        const { userData } = req.body;
        let user = await UserModel_1.userModel.findOne({ username: userData.username }).exec();
        if (!user)
            user = new UserModel_1.userModel();
        Object.assign(user, userData);
        await user.save();
        return res.status(201).json(true);
    }
}
exports.default = new SaveDataController();
