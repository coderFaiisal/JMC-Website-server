"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const jwtVerify_1 = __importDefault(require("../../middleware/jwtVerify"));
const verifyAdmin_1 = __importDefault(require("../../middleware/verifyAdmin"));
const router = express_1.default.Router();
router.get("/", users_controller_1.getUsers);
router.get("/jwt", users_controller_1.createUserToken);
router.get("/admin/:email", users_controller_1.checkIsAdmin);
router.post("/createUser", users_controller_1.createUser);
router.patch("/makeAdmin/:id", jwtVerify_1.default, verifyAdmin_1.default, users_controller_1.makeAdminUser);
router.patch("/deleteAdmin/:id", jwtVerify_1.default, verifyAdmin_1.default, users_controller_1.deleteAdminUser);
exports.usersRoutes = router;
