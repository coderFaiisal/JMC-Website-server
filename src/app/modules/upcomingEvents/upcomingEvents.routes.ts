import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  getHomeEvents,
} from "./upcomingEvents.controller";

const router = express.Router();

router.get("/", getEvents);
router.get("/homeEvent", getHomeEvents);
router.get("/:id", getEvent);
router.post("/createEvent", createEvent);
router.delete("/:id", deleteEvent )

export const upcomingEventRoutes = router;
