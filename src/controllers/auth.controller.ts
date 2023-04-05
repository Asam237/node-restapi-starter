import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { TokenInfo } from "../core/types";
import { EXPIRES, JWT_SECRET } from "../core/config";

class AuthController {
  public static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { firsname, lastname, email }: any = req.body;
      const password: string = bcrypt.hashSync(req.body.password, 10);
      const userParams: any = { firsname, lastname, email, password };
      const user: any = new UserModel(userParams);
      await user.save();
      return res.json({ user });
    } catch (error) {
      console.log(error);
    }
  }
  public static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { email, password }: any = req.body;
    try {
      const user: any = await UserModel.findOne({ email });
      if (!user) return res.json({ message: "Login failed !" });
      const isMatch: boolean = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.json({ message: "Login failed !" });
      const { _id } = user;
      const tokenInfo: TokenInfo = { id: _id };
      const token: string = jwt.sign(tokenInfo, "secret", {
        expiresIn: EXPIRES,
      });
      return res.json({ user, token });
    } catch (error) {
      console.log(error);
    }
  }
}

export { AuthController };
