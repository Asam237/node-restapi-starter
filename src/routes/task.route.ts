import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const TaskRoute = () => {
  const router = Router();
  const prefix: string = "/tasks";
  router.post(`${prefix}/create`, taskController.createTaskController);
  router.get(`${prefix}/:id`, taskController.oneTaskController);
  router.get(`${prefix}`, taskController.allTaskController);
  router.delete(`${prefix}/:id`, taskController.destroyTaskController);
  return router;
};

export { TaskRoute };
