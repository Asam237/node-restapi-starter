import { CreateUserInput } from "../../shared/types/models";
import { UserModel } from "../models/user.model";

const createUserService = async (input: CreateUserInput) => {
  return await UserModel.create(input);
};

const findByEmail = async (email: any) => {
  return await UserModel.findOne({ email });
};

export default { createUserService, findByEmail };
