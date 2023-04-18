import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import Validator from "../validator";
import authValidator from "../validator/auth.validator";

const user: any = Validator.method;

class AuthRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes = () => {
    const prefix: string = "/auth";
    this.router.post(
      `${prefix}/create`,
      authValidator.validate(user.createUser),
      AuthController.register
    );
    this.router.post(
      `${prefix}/login`,
      authValidator.validate(user.login),
      AuthController.login
    );
  };
}

export { AuthRoute };
