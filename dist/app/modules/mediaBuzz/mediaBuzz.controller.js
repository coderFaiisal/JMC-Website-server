"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTestimonial = exports.addMemoriesVideo = exports.addMemoriesPhoto = exports.addExhibitionPhoto = exports.addTopEvent = exports.addSponsors = exports.addMeetTheGuestVideo = exports.addGuest = exports.getBuzzById = exports.getAllMediaBuzz = exports.createMediaBuzz = void 0;
const mediaBuzz_service_1 = require("./mediaBuzz.service");
const createMediaBuzz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const mediaBuzz = yield (0, mediaBuzz_service_1.createMediaBuzzToDb)(data);
    res.status(201).json({
        status: "success",
        data: mediaBuzz,
    });
});
exports.createMediaBuzz = createMediaBuzz;
const getAllMediaBuzz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMediaBuzz = yield (0, mediaBuzz_service_1.getAllMediaBuzzFromDb)();
    res.status(201).send(allMediaBuzz);
});
exports.getAllMediaBuzz = getAllMediaBuzz;
const getBuzzById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const mediaBuzz = yield (0, mediaBuzz_service_1.getBuzzByIdFromDb)(id);
    res.status(201).send(mediaBuzz);
});
exports.getBuzzById = getBuzzById;
const addGuest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body,
    };
    const result = yield (0, mediaBuzz_service_1.addGuestToDb)(payload);
    res.status(201).send(result);
});
exports.addGuest = addGuest;
const addMeetTheGuestVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body,
    };
    const result = yield (0, mediaBuzz_service_1.addMeetTheGuestVideoToDb)(payload);
    res.status(201).send(result);
});
exports.addMeetTheGuestVideo = addMeetTheGuestVideo;
const addSponsors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body,
    };
    const result = yield (0, mediaBuzz_service_1.addSponsorsToDb)(payload);
    res.status(201).send(result);
});
exports.addSponsors = addSponsors;
const addTopEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body,
    };
    const result = yield (0, mediaBuzz_service_1.addTopEventToDb)(payload);
    res.status(201).send(result);
});
exports.addTopEvent = addTopEvent;
const addExhibitionPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body.url,
    };
    const result = yield (0, mediaBuzz_service_1.addExhibitionPhotoToDb)(payload);
    res.status(201).send(result);
});
exports.addExhibitionPhoto = addExhibitionPhoto;
const addMemoriesPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body.url,
    };
    const result = yield (0, mediaBuzz_service_1.addMemoriesPhotoToDb)(payload);
    res.status(201).send(result);
});
exports.addMemoriesPhoto = addMemoriesPhoto;
const addMemoriesVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body.url,
    };
    const result = yield (0, mediaBuzz_service_1.addMemoriesVideoToDb)(payload);
    res.status(201).send(result);
});
exports.addMemoriesVideo = addMemoriesVideo;
const addTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        id: req.params.id,
        data: req.body,
    };
    const result = yield (0, mediaBuzz_service_1.addTestimonialToDb)(payload);
    res.status(201).send(result);
});
exports.addTestimonial = addTestimonial;
