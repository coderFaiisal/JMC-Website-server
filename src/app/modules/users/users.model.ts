import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

const User = model("user", userSchema);

export default User;
