import { Request, Response } from "express";
import { CreateUserInput, LoginType } from "../shared/types/models";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";
import { TokenPayload } from "../shared/types/commons";
import userService from "../domain/services/user.service";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const registerController = async (req: Request, res: Response) => {
  const { email, fullname }: CreateUserInput = req.body;
  const password: string = bcrypt.hashSync(req.body.password, 10);
  const createUser = await userService.createUserService({
    email,
    fullname,
    password,
  });
  return res.status(200).json({ data: createUser });
};

const loginController = async (req: Request, res: Response) => {
  const { email, password }: LoginType = req.body;
  const user = await userService.findByEmail(email);
  if (!user) {
    return res.status(400).json({ messgae: "Login failed !" });
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ messgae: "Login failed !" });
  }
  const { _id }: any = user;
  const tokenPayload: TokenPayload = {
    id: _id,
  };
  const token: string = jwt.sign(tokenPayload, JWT_SECRET!!, {
    expiresIn: EXPIRES,
  });
  return res.status(200).json({ user, token });
};

export { registerController, loginController };
