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
exports.deleteEventById = exports.getEventById = exports.getEventsFromDb = exports.createEventToDb = void 0;
const previousEvents_model_1 = __importDefault(require("./previousEvents.model"));
const createEventToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const event = new previousEvents_model_1.default(payload);
    yield event.save();
    return event;
});
exports.createEventToDb = createEventToDb;
const getEventsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const events = yield previousEvents_model_1.default.find(query).sort({ date: 1 });
    return events;
});
exports.getEventsFromDb = getEventsFromDb;
const getEventById = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: payload };
    const event = yield previousEvents_model_1.default.findOne(query);
    return event;
});
exports.getEventById = getEventById;
const deleteEventById = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: payload };
    const result = yield previousEvents_model_1.default.deleteOne(query);
    return result;
});
exports.deleteEventById = deleteEventById;
