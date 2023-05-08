import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    requiref: true,
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
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
const userUpdateParams: string[] = ["firstname", "lastname", "email"];
export { UserModel, userUpdateParams };
