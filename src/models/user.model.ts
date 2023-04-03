import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("User", userSchema);
const userUpdateParams: string[] = ["firstname", "lastname", "email"];
export { UserModel, userUpdateParams };
