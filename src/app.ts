import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

class App {
  server = express(); //quando a classe for chamada, vai chamar automaticamante as funçoes middlewares e routes
  constructor() {
    mongoose.connect(
      'mongodb+srv://<username>:<password>@desafio-reportei.zpzhw.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
