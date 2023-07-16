"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const upcomingEventSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    photoURL: { type: String, required: true },
    speakers: { type: [String], required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    organizer: { type: String, required: true },
    registration: { type: Boolean },
    price: { type: Number },
});
const UpcomingEvent = (0, mongoose_1.model)("UpcomingEvent", upcomingEventSchema);
exports.default = UpcomingEvent;
