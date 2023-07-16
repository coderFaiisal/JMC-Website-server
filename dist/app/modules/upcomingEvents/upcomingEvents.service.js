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
exports.deleteEventById = exports.getEventById = exports.getHomeEventsFromDb = exports.getEventsFromDb = exports.createEventToDb = void 0;
const upcomingEvents_model_1 = __importDefault(require("./upcomingEvents.model"));
const createEventToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const event = new upcomingEvents_model_1.default(payload);
    yield event.save();
    const eventDate = new Date(payload.date);
    const expirationDate = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate() + 1 // Add 1 day to the event date
    );
    // // Schedule a task to delete the event after the expiration date
    // setTimeout(async () => {
    //   await UpcomingEvent.findByIdAndDelete(event._id);
    // }, expirationDate.getTime() - Date.now());
    return event;
});
exports.createEventToDb = createEventToDb;
const getEventsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    const query = {
        date: { $gte: formattedCurrentDate },
    };
    const events = yield upcomingEvents_model_1.default.find(query).sort({ date: 1 });
    return events;
});
exports.getEventsFromDb = getEventsFromDb;
const getHomeEventsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    const query = {
        date: { $gte: formattedCurrentDate },
    };
    const events = yield upcomingEvents_model_1.default.find(query).sort({ date: 1 }).limit(3);
    return events;
});
exports.getHomeEventsFromDb = getHomeEventsFromDb;
const getEventById = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: payload };
    const event = yield upcomingEvents_model_1.default.findOne(query);
    return event;
});
exports.getEventById = getEventById;
const deleteEventById = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: payload };
    const result = yield upcomingEvents_model_1.default.deleteOne(query);
    return result;
});
exports.deleteEventById = deleteEventById;
