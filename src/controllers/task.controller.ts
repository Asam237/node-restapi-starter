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
      const { title, description }: any = req.body;
      const user: any = await UserModel.findById({ _id: req.body.user });
      const taskParams: any = { title, description, user };
      const task: any = new TaskModel(taskParams);
      user.tasks.push(task._id);
      await task.save;
      return res.status(200).json({ task });
    } catch (error) {
      console.log(error);
    }
  }
}

export { TaskController };

