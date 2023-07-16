"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upcomingEventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const upcomingEvents_controller_1 = require("./upcomingEvents.controller");
const router = express_1.default.Router();
router.get("/", upcomingEvents_controller_1.getEvents);
router.get("/homeEvent", upcomingEvents_controller_1.getHomeEvents);
router.get("/:id", upcomingEvents_controller_1.getEvent);
router.post("/createEvent", upcomingEvents_controller_1.createEvent);
router.delete("/:id", upcomingEvents_controller_1.deleteEvent);
exports.upcomingEventRoutes = router;
