import { CreateTaskInput } from "../../shared/types/models";
import { TaskModel } from "../models/task.model";

const createTaskService = async (input: CreateTaskInput) => {
  return await TaskModel.create(input);
};

const oneTaskService = async (id: any) => {
  return await TaskModel.findOne({ _id: id })
}

const allTaskService = async () => {
  return await TaskModel.find({})
}

const destroyTaskService = async (id: any) => {
  return await TaskModel.deleteOne({ _id: id })
}

export default { createTaskService, oneTaskService, allTaskService, destroyTaskService };
