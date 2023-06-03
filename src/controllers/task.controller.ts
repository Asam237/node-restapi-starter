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

const oneTaskController = async (req: Request, res: Response) => {
  const task = await taskService.oneTaskService(req.params.id)
  return res.status(200).json({ task })
}

const allTaskController = async (req: Request, res: Response) => {
  const tasks = await taskService.allTaskService()
  return res.status(200).json({ tasks })
}

const destroyTaskController = async (req: Request, res: Response) => {
  await taskService.destroyTaskService(req.params.id)
  return res.status(200).json({ message: "Task delete success !" })
}

export { createTaskController, oneTaskController, allTaskController, destroyTaskController };
