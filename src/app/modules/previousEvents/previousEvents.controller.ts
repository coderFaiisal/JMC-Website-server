import { Request, Response } from "express";
import { createEventToDb, deleteEventById, getEventById, getEventsFromDb } from "./previousEvents.service";

export const createEvent = async (req: Request, res: Response) => {
  const data = req.body;
  const event = await createEventToDb(data);
  res.status(201).json({
    status: "success",
    data: event,
  });
};


export const getEvents = async (req: Request, res: Response) => {
  const events = await getEventsFromDb();
  res.status(201).send(events);
};


export const getEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const event = await getEventById(id);
  res.status(201).send(event);
};

export const deleteEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteEventById(id);
  res.status(201).send(result);
};

