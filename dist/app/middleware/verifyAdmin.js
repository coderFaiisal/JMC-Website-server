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
const users_model_1 = __importDefault(require("../modules/users/users.model"));
const verifyAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedEmail = req.decoded.email;
    const query = { email: decodedEmail };
    const user = yield users_model_1.default.findOne(query);
    if ((user === null || user === void 0 ? void 0 : user.role) !== "admin") {
        return res.status(403).send({ message: "forbidden access" });
    }
    next();
});
exports.default = verifyAdmin;
