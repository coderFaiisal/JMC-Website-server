import { IPreviousEvent } from "./previousEvents.interface";
import PreviousEvent from "./previousEvents.model";

export const createEventToDb = async (
  payload: IPreviousEvent
): Promise<IPreviousEvent> => {
  const event = new PreviousEvent(payload);
  await event.save();
  return event;
};

export const getEventsFromDb = async () => {
  const query = {};
  const events = await PreviousEvent.find(query).sort({ date: 1 });
  return events;
};

export const getEventById = async (payload: string) => {
  const query = { _id: payload };
  const event = await PreviousEvent.findOne(query);
  return event;
};

export const deleteEventById = async (payload: string) => {
  const query = { _id: payload };
  const result = await PreviousEvent.deleteOne(query);
  return result;
};
