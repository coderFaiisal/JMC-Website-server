"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mediaBuzzSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    bannerURL: { type: String, required: true },
    guests: [
        {
            name: { type: String },
            imgURL: { type: String },
            designation: { type: String },
        },
    ],
    meetTheGuestVideos: [
        {
            videoURL: { type: String },
        },
    ],
    sponsors: [
        {
            imgURL: { type: String },
        },
    ],
    eventSessions: [
        {
            name: { type: String },
            posterURL: { type: String },
            guests: { type: [String] },
            guestRole: { type: String },
            photos: { type: [String] },
            videos: { type: [String] },
        },
    ],
    photoExhibition: {
        title: { type: String },
        photos: { type: [String] },
    },
    memories: {
        photos: { type: [String] },
        videos: { type: [String] },
    },
    testimonials: [
        {
            name: { type: String },
            image: { type: String },
            message: { type: String },
            designation: { type: String },
        },
    ],
});
const MediaBuzz = (0, mongoose_1.model)("MediaBuzz", mediaBuzzSchema);
exports.default = MediaBuzz;
