import { Router } from "express";
import * as userController from "../controllers/user.controller";

const UserRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/create`, userController.registerController);
  router.post(`${prefix}/login`, userController.loginController);
  return router;
};

export { UserRoute };
