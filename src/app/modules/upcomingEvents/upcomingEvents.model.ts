import { Schema, model } from "mongoose";
import { IUpcomingEvent } from "./upcomingEvents.interface";

const upcomingEventSchema = new Schema<IUpcomingEvent>({
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

const UpcomingEvent = model("UpcomingEvent", upcomingEventSchema);

export default UpcomingEvent;
