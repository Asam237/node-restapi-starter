import mongoose from "mongoose";

const taskSchema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const TaskModel: any = mongoose.model("Task", taskSchema);
const taskUpdateParams: string[] = ["title", "description"];

export { TaskModel, taskUpdateParams };

