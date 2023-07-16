import { IUpcomingEvent } from "./upcomingEvents.interface";
import UpcomingEvent from "./upcomingEvents.model";

export const createEventToDb = async (payload: IUpcomingEvent): Promise<IUpcomingEvent> => {
  const event = new UpcomingEvent(payload);
  await event.save();

  const eventDate = new Date(payload.date);
  const expirationDate = new Date(
    eventDate.getFullYear(),
    eventDate.getMonth(),
    eventDate.getDate() + 1 // Add 1 day to the event date
  );

  // // Schedule a task to delete the event after the expiration date
  // setTimeout(async () => {
  //   await UpcomingEvent.findByIdAndDelete(event._id);
  // }, expirationDate.getTime() - Date.now());

  return event;
};

export const getEventsFromDb = async () => {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  const query = {
    date: { $gte: formattedCurrentDate },
  };
  const events = await UpcomingEvent.find(query).sort({ date: 1 });
  return events;
};

export const getHomeEventsFromDb = async () => {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  const query = {
    date: { $gte: formattedCurrentDate },
  };
  const events = await UpcomingEvent.find(query).sort({ date: 1 }).limit(3);

  return events;
};

export const getEventById = async (payload: string) => {
  const query = { _id: payload };
  const event = await UpcomingEvent.findOne(query);
  return event;
};

export const deleteEventById = async (payload: string) => {
  const query = { _id: payload };
  const result = await UpcomingEvent.deleteOne(query);
  return result;
};
