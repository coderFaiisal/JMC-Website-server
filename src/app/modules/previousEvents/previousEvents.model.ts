import { Schema, model } from "mongoose";
import { IPreviousEvent } from "./previousEvents.interface";

const previousEventSchema = new Schema<IPreviousEvent>({
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

const PreviousEvent = model("PreviousEvent", previousEventSchema);

export default PreviousEvent;
