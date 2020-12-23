import { Router } from 'express';

import InstagramSearch from './controllers/InstagramSearch';
import SaveDataController from './controllers/SaveDataController';

const routes = Router();

routes.get('/instagram/:username', InstagramSearch.search);
routes.post('/user', SaveDataController.store);

export default routes;
