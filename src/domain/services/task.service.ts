import { CreateTaskInput } from "../../shared/types/models";
import { TaskModel } from "../models/task.model";

const createTaskService = async (input: CreateTaskInput) => {
  return await TaskModel.create(input);
};

export default { createTaskService };
