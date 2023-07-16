import { NextFunction, Request, Response } from "express";
import User from "../modules/users/users.model";

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const decodedEmail = req.decoded.email;
  const query = { email: decodedEmail };
  const user = await User.findOne(query);

  if (user?.role !== "admin") {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

export default verifyAdmin;
