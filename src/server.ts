import express from "express";
import cors from "cors";

import routes from "./routes";
import InstagramSearch from "./controllers/InstagramSearch";
import SaveDataController from "./controllers/SaveDataController";

const server = express();
const port = process.env.PORT || 3001;
server.listen(port);
server.use(express.json());
server.use(cors());
server.use(routes);

routes.get("/instagram/:username", InstagramSearch.search);
routes.post("/user", SaveDataController.store);

export default server;
