import { Request, Response } from "express";
import {
  addExhibitionPhotoToDb,
  addGuestToDb,
  addMeetTheGuestVideoToDb,
  addMemoriesPhotoToDb,
  addMemoriesVideoToDb,
  addSponsorsToDb,
  addTestimonialToDb,
  addTopEventToDb,
  createMediaBuzzToDb,
  getAllMediaBuzzFromDb,
  getBuzzByIdFromDb,
} from "./mediaBuzz.service";

export const createMediaBuzz = async (req: Request, res: Response) => {
  const data = req.body;
  const mediaBuzz = await createMediaBuzzToDb(data);
  res.status(201).json({
    status: "success",
    data: mediaBuzz,
  });
};

export const getAllMediaBuzz = async (req: Request, res: Response) => {
  const allMediaBuzz = await getAllMediaBuzzFromDb();
  res.status(201).send(allMediaBuzz);
};

export const getBuzzById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const mediaBuzz = await getBuzzByIdFromDb(id);
  res.status(201).send(mediaBuzz);
};

export const addGuest = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body,
  };
  const result = await addGuestToDb(payload);
  res.status(201).send(result);
};

export const addMeetTheGuestVideo = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body,
  };
  const result = await addMeetTheGuestVideoToDb(payload);
  res.status(201).send(result);
};

export const addSponsors = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body,
  };
  const result = await addSponsorsToDb(payload);
  res.status(201).send(result);
};

export const addTopEvent = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body,
  };
  const result = await addTopEventToDb(payload);
  res.status(201).send(result);
};

export const addExhibitionPhoto = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body.url,
  };
  const result = await addExhibitionPhotoToDb(payload);
  res.status(201).send(result);
};

export const addMemoriesPhoto = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body.url,
  };
  const result = await addMemoriesPhotoToDb(payload);
  res.status(201).send(result);
};

export const addMemoriesVideo = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body.url,
  };
  const result = await addMemoriesVideoToDb(payload);
  res.status(201).send(result);
};

export const addTestimonial = async (req: Request, res: Response) => {
  const payload = {
    id: req.params.id,
    data: req.body,
  };
  const result = await addTestimonialToDb(payload);
  res.status(201).send(result);
};
