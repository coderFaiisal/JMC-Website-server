"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.previousEventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const previousEvents_controller_1 = require("./previousEvents.controller");
const router = express_1.default.Router();
router.get("/", previousEvents_controller_1.getEvents);
router.get("/:id", previousEvents_controller_1.getEvent);
router.post("/createEvent", previousEvents_controller_1.createEvent);
router.delete("/:id", previousEvents_controller_1.deleteEvent);
exports.previousEventRoutes = router;
