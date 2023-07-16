import { IUser } from "./users.interface";
import User from "./users.model";

export const createUserToDb = async (payload: IUser) => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
  const query = {};
  const users = await User.find(query);
  return users;
};

export const tokenUserFromDB = async (payload: any) => {
  const query = { email: payload };
  const user = await User.findOne(query);
  return user;
};

export const checkIsAdminInDB = async (payload: any) => {
  const query = { email: payload };
  const result = await User.findOne(query);
  return result;
};

export const makeAdminUserToDB = async (payload: any) => {
  const id = payload;
  const filter = { _id: id };
  const updatedDoc = { $set: { role: "admin" } };
  const options = { upsert: true };

  const result = await User.updateOne(filter, updatedDoc, options);
  return result;
};

export const deleteAdminUserToDB = async (payload: any) => {
  const id = payload;
  const filter = { _id: id };
  const updatedDoc = { $set: { role: "user" } };
  const options = { upsert: true };

  const result = await User.updateOne(filter, updatedDoc, options);
  return result;
};
