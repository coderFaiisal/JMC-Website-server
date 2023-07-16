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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.getEvent = exports.getEvents = exports.createEvent = void 0;
const previousEvents_service_1 = require("./previousEvents.service");
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const event = yield (0, previousEvents_service_1.createEventToDb)(data);
    res.status(201).json({
        status: "success",
        data: event,
    });
});
exports.createEvent = createEvent;
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield (0, previousEvents_service_1.getEventsFromDb)();
    res.status(201).send(events);
});
exports.getEvents = getEvents;
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const event = yield (0, previousEvents_service_1.getEventById)(id);
    res.status(201).send(event);
});
exports.getEvent = getEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield (0, previousEvents_service_1.deleteEventById)(id);
    res.status(201).send(result);
});
exports.deleteEvent = deleteEvent;
