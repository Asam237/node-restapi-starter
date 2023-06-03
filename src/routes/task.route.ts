import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const TaskRoute = () => {
  const router = Router();
  const prefix: string = "/tasks";
  router.post(`${prefix}/create`, taskController.createTaskController);
  return router;
};

export { TaskRoute };
