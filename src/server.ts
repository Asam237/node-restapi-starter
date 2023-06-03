import express, { Application } from "express";
import { CommentRoute } from "./routes/comment.route";
import { TaskRoute } from "./routes/task.route";
import { UserRoute } from "./routes/user.route";

export const setupRestEndpoints = (app: Application) => {
  const router = express.Router();
  app.use(express.json());
  app.use("/", router);
  app.use("/", UserRoute());
  app.use("/", TaskRoute());
  app.use("/", CommentRoute());
};
