import { check, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";
import Validator from ".";

export default {
  validate: (
    method: string
  ): (
    | ValidationChain
    | ((req: Request, res: Response, next: NextFunction) => void)
  )[] => {
    const validator = new Validator();
    switch (method) {
      case "createTask":
        return [
          check("title")
            .not()
            .isEmpty()
            .withMessage(() => "title is required"),
          check("description")
            .not()
            .isEmpty()
            .withMessage(() => "description is required"),
        ];
      default:
        return [
          (req: Request, res: Response, next: NextFunction) => {
            validator.handlerValidation(req, res, next);
          },
        ];
    }
  },
};

