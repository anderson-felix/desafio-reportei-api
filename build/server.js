'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const routes_1 = __importDefault(require('./routes'));
const InstagramSearch_1 = __importDefault(require('./controllers/InstagramSearch'));
const SaveDataController_1 = __importDefault(require('./controllers/SaveDataController'));
const server = express_1.default();
const port = process.env.PORT || 3001;
server.listen(port);
server.use(express_1.default.json());
server.use(cors_1.default());
server.use(routes_1.default);
routes_1.default.get('/instagram/:username', InstagramSearch_1.default.search);
routes_1.default.post('/user', SaveDataController_1.default.store);
exports.default = server;
