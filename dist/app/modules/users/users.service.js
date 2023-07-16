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
exports.deleteAdminUserToDB = exports.makeAdminUserToDB = exports.checkIsAdminInDB = exports.tokenUserFromDB = exports.getUsersFromDB = exports.createUserToDb = void 0;
const users_model_1 = __importDefault(require("./users.model"));
const createUserToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_model_1.default(payload);
    yield user.save();
    return user;
});
exports.createUserToDb = createUserToDb;
const getUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const users = yield users_model_1.default.find(query);
    return users;
});
exports.getUsersFromDB = getUsersFromDB;
const tokenUserFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { email: payload };
    const user = yield users_model_1.default.findOne(query);
    return user;
});
exports.tokenUserFromDB = tokenUserFromDB;
const checkIsAdminInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { email: payload };
    const result = yield users_model_1.default.findOne(query);
    return result;
});
exports.checkIsAdminInDB = checkIsAdminInDB;
const makeAdminUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const id = payload;
    const filter = { _id: id };
    const updatedDoc = { $set: { role: "admin" } };
    const options = { upsert: true };
    const result = yield users_model_1.default.updateOne(filter, updatedDoc, options);
    return result;
});
exports.makeAdminUserToDB = makeAdminUserToDB;
const deleteAdminUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const id = payload;
    const filter = { _id: id };
    const updatedDoc = { $set: { role: "user" } };
    const options = { upsert: true };
    const result = yield users_model_1.default.updateOne(filter, updatedDoc, options);
    return result;
});
exports.deleteAdminUserToDB = deleteAdminUserToDB;
