import { AuthRoute } from "./auth.routes";
import * as bodyParser from "body-parser";
import express from "express";

class Routes {
  public static init(app: express.Application) {
    const router: express.Router = express.Router();
    app.use(bodyParser.json);
    app.use("/", new AuthRoute().router);
  }
}
