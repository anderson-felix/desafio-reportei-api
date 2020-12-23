import express from 'express';
import cors from 'cors';

import routes from './routes';

const server = express();
const port = process.env.PORT || 3001;
server.listen(port);
server.use(express.json());
server.use(cors());
server.use(routes);

export default server;
