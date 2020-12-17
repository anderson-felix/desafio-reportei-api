'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require('mongoose'));
mongoose_1.default.connect('mongodb+srv://instagram_access:desafioreportei777@desafio-reportei.zpzhw.mongodb.net/instool?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
exports.db = mongoose_1.default.connection;
