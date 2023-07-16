import express from "express";
import {
  addExhibitionPhoto,
  addGuest,
  addMeetTheGuestVideo,
  addMemoriesPhoto,
  addMemoriesVideo,
  addSponsors,
  addTestimonial,
  addTopEvent,
  createMediaBuzz,
  getAllMediaBuzz,
  getBuzzById,
} from "./mediaBuzz.controller";

const router = express.Router();

router.get("/", getAllMediaBuzz);
router.get("/:id", getBuzzById);
router.post("/createMediaBuzz", createMediaBuzz);
router.patch("/addGuest/:id", addGuest);
router.patch("/addMeetTheGuests/:id", addMeetTheGuestVideo);
router.patch("/addSponsors/:id", addSponsors);
router.patch("/addTopEvent/:id", addTopEvent);
router.patch("/addExhibitionPhoto/:id", addExhibitionPhoto);
router.patch("/addMemoriesPhoto/:id", addMemoriesPhoto);
router.patch("/addMemoriesVideo/:id", addMemoriesVideo);
router.patch("/addTestimonial/:id", addTestimonial);

export const mediaBuzzRoutes = router;
