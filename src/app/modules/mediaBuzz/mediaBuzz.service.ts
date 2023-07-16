import { IMediaBuzz } from "./mediaBuzz.interface";
import MediaBuzz from "./mediaBuzz.model";

export const createMediaBuzzToDb = async (
  payload: IMediaBuzz
): Promise<IMediaBuzz> => {
  const mediaBuzz = new MediaBuzz(payload);
  await mediaBuzz.save();
  return mediaBuzz;
};

export const getAllMediaBuzzFromDb = async () => {
  const allMediaBuzz = await MediaBuzz.aggregate([
    { $project: { title: 1, bannerURL: 1 } },
  ]);
  return allMediaBuzz;
};

export const getBuzzByIdFromDb = async (payload: string) => {
  const query = { _id: payload };
  const event = await MediaBuzz.findOne(query);
  return event;
};

export const addGuestToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { guests: data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addMeetTheGuestVideoToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { meetTheGuestVideos: data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addSponsorsToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { sponsors: data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addTopEventToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { eventSessions: data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addExhibitionPhotoToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { "photoExhibition.photos": data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addMemoriesPhotoToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { "memories.photos": data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addMemoriesVideoToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { "memories.videos": data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};

export const addTestimonialToDb = async (payload: any) => {
  const { id, data } = payload;
  const filter = { _id: id };
  const updateDoc = { $push: { testimonials: data } };
  const options = { upsert: true };
  const document = await MediaBuzz.updateOne(filter, updateDoc, options);
  return document;
};
