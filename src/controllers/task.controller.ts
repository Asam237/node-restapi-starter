import { Request, Response, NextFunction } from "express";
import { TaskModel } from "../models/task.model";
import { UserModel } from "../models/user.model";

class TaskController {
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      //the userInfo provided below should be an object with id of the user
      const { title, description, userInfo }: any = req.body;
      
      const checkUser: any = await UserModel.findById({_id: userInfo._id})

      if (!checkUser) {
        return res.json({ message: "You need to have an account to create task." });
      }

      const user: any = await UserModel.findById({ _id: userInfo._id });
      const taskParams: any = { title, description, user };
      const task: any = new TaskModel(taskParams);
      user.tasks.push(task._id);

      //saving the modified user and task
      await user.save();
      await task.save;
      return res.status(200).json({ task });
    } catch (error) {
      console.log(error);
    }
  }
}

export { TaskController };

