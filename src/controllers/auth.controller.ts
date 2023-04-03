import {Request, Response, NextFunction} from "express";
import * as bcrypt from "bcryptjs";
import {UserModel} from "../models/user.model";

class AuthController {
  public static async register(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {firsname, lastname, email}: any = req.body
      const password: string = bcrypt.hashSync(req.body.password, 10);
      const userParams: any = {firsname, lastname, email, password}
      const user: any = new UserModel(userParams);
      await user.save()
      return res.json({user});
    }
    catch(error) {
      console.log(error)
    }
  }
}

export {AuthController}
