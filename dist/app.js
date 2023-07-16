"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const upcomingEvents_routes_1 = require("./app/modules/upcomingEvents/upcomingEvents.routes");
const previousEvents_routes_1 = require("./app/modules/previousEvents/previousEvents.routes");
const mediaBuzz_routes_1 = require("./app/modules/mediaBuzz/mediaBuzz.routes");
const users_routes_1 = require("./app/modules/users/users.routes");
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//route
app.use("/api/v1/users", users_routes_1.usersRoutes);
app.use("/api/v1/upcomingEvent", upcomingEvents_routes_1.upcomingEventRoutes);
app.use("/api/v1/previousEvent", previousEvents_routes_1.previousEventRoutes);
app.use("/api/v1/mediaBuzz", mediaBuzz_routes_1.mediaBuzzRoutes);
exports.default = app;
