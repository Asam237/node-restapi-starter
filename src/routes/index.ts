import { AuthRoute } from "./auth.routes";
import * as bodyParser from "body-parser";
import * as express from "express";
import cors from "cors";
import { TaskRoute } from "./task.route";

class Routes {
  static init(app: express.Application): void {
    const router: express.Router = express.Router();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use("/", router);
    app.use("/", new AuthRoute().router);
    app.use("/", new TaskRoute().router);
  }
}

export { Routes };
