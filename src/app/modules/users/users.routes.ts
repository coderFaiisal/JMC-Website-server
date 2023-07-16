import express from "express";
import {
  checkIsAdmin,
  createUser,
  createUserToken,
  deleteAdminUser,
  getUsers,
  makeAdminUser,
} from "./users.controller";
import verifyJWT from "../../middleware/jwtVerify";
import verifyAdmin from "../../middleware/verifyAdmin";

const router = express.Router();

router.get("/", getUsers);
router.get("/jwt", createUserToken);
router.get("/admin/:email", checkIsAdmin);
router.post("/createUser", createUser);
router.patch("/makeAdmin/:id", verifyJWT, verifyAdmin, makeAdminUser);
router.patch("/deleteAdmin/:id", verifyJWT, verifyAdmin, deleteAdminUser);

export const usersRoutes = router;
