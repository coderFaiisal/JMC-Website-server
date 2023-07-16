import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
} from "./previousEvents.controller";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);
router.post("/createEvent", createEvent);
router.delete("/:id", deleteEvent);

export const previousEventRoutes = router;
