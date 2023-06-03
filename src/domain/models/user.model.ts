import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
const userUpdateParams: string[] = ["fullname"];

export { UserModel, userUpdateParams };
