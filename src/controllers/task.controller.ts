import { Request, Response } from "express";
import { UserModel } from "../domain/models/user.model";
import taskService from "../domain/services/task.service";
import { CreateTaskInput } from "../shared/types/models";

const createTaskController = async (req: Request, res: Response) => {
  const { checked, description, title }: CreateTaskInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createTask = await taskService.createTaskService({
    checked,
    description,
    title,
    user,
  });
  user?.tasks.push(createTask._id);
  await user?.save();
  await createTask.save();
  return res.status(200).json({ task: createTask });
};

export { createTaskController };
