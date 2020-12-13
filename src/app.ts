import routes from './routes';
import server from './server';

class App {
  constructor() {
    this.routes();
    this.server();
  }
  server() {
    server;
  }
  routes() {
    routes;
  }
}
export default new App();
