"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const previousEventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    photoURL: { type: String, required: true },
    speakers: { type: [String], required: true },
    description: { type: String, required: true },
    organizer: { type: String, required: true },
    date: { type: String, required: true },
    videos: { type: [String], required: true },
    photos: { type: [String], required: true },
    testimonials: [
        {
            name: { type: String },
            image: { type: String },
            message: { type: String },
            position: { type: String },
        },
    ],
});
const PreviousEvent = (0, mongoose_1.model)("PreviousEvent", previousEventSchema);
exports.default = PreviousEvent;
