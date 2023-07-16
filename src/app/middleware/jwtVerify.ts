import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const accessToken: any = process.env.ACCESS_TOKEN;

function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("unauthorized access");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, accessToken, function (err: any, decoded: any) {
    if (err) {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

export default verifyJWT;
