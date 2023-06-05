import express, { Application } from "express";
import { CommentRoute } from "./routes/comment.route";
import { TaskRoute } from "./routes/task.route";
import { UserRoute } from "./routes/user.route";
import * as swaggerUi from "swagger-ui-express"
import * as swaggerDoc from "./swagger.json"
import cors from "cors"

export const setupRestEndpoints = (app: Application) => {
  const router = express.Router();
  app.use(express.json());
  app.use(cors())
  app.use("/", router);
  app.use("/", UserRoute());
  app.use("/", TaskRoute());
  app.use("/", CommentRoute());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
};
