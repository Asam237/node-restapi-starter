import { Request, Response, NextFunction } from "express";
import { check, ValidationChain } from "express-validator";
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
      case "createUser":
        return [
          check("firstname")
            .not()
            .isEmpty()
            .withMessage(() => "firsname is required"),
          check("lastname")
            .not()
            .isEmpty()
            .withMessage(() => "firsname is required"),
          check("email")
            .not()
            .isEmpty()
            .withMessage(() => "firsname is required"),
          check("password")
            .not()
            .isEmpty()
            .withMessage(() => "firsname is required"),
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
