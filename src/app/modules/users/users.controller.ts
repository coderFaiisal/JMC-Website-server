import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import {
  checkIsAdminInDB,
  createUserToDb,
  deleteAdminUserToDB,
  getUsersFromDB,
  makeAdminUserToDB,
  tokenUserFromDB,
} from "./users.service";


const accessToken: any = process.env.ACCESS_TOKEN;

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await createUserToDb(user);
  res.status(201).send(result);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(201).send(users);
};

export const createUserToken = async (req: Request, res: Response) => {
  const email = req.query.email;
  const user = await tokenUserFromDB(email);

  if (user) {
    const token = jwt.sign({ email }, accessToken, {
      expiresIn: "1h",
    });
    return res.send({ accessToken: token });
  }
  res.status(403).send({ accessToken: "" });
};

export const checkIsAdmin = async (req: Request, res: Response) => {
  const email = req.params.email;
  const user = await checkIsAdminInDB(email);
  res.send({ isAdmin: user?.role === "admin" });
};


export const makeAdminUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await makeAdminUserToDB(id);
  res.status(201).send(result);
};

export const deleteAdminUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteAdminUserToDB(id);
  res.status(201).send(result);
};


