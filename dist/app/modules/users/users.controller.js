"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminUser = exports.makeAdminUser = exports.checkIsAdmin = exports.createUserToken = exports.getUsers = exports.createUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const users_service_1 = require("./users.service");
const accessToken = process.env.ACCESS_TOKEN;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield (0, users_service_1.createUserToDb)(user);
    res.status(201).send(result);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, users_service_1.getUsersFromDB)();
    res.status(201).send(users);
});
exports.getUsers = getUsers;
const createUserToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const user = yield (0, users_service_1.tokenUserFromDB)(email);
    if (user) {
        const token = jsonwebtoken_1.default.sign({ email }, accessToken, {
            expiresIn: "1h",
        });
        return res.send({ accessToken: token });
    }
    res.status(403).send({ accessToken: "" });
});
exports.createUserToken = createUserToken;
const checkIsAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const user = yield (0, users_service_1.checkIsAdminInDB)(email);
    res.send({ isAdmin: (user === null || user === void 0 ? void 0 : user.role) === "admin" });
});
exports.checkIsAdmin = checkIsAdmin;
const makeAdminUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, users_service_1.makeAdminUserToDB)(id);
    res.status(201).send(result);
});
exports.makeAdminUser = makeAdminUser;
const deleteAdminUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, users_service_1.deleteAdminUserToDB)(id);
    res.status(201).send(result);
});
exports.deleteAdminUser = deleteAdminUser;
