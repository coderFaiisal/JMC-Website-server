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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTestimonialToDb = exports.addMemoriesVideoToDb = exports.addMemoriesPhotoToDb = exports.addExhibitionPhotoToDb = exports.addTopEventToDb = exports.addSponsorsToDb = exports.addMeetTheGuestVideoToDb = exports.addGuestToDb = exports.getBuzzByIdFromDb = exports.getAllMediaBuzzFromDb = exports.createMediaBuzzToDb = void 0;
const mediaBuzz_model_1 = __importDefault(require("./mediaBuzz.model"));
const createMediaBuzzToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const mediaBuzz = new mediaBuzz_model_1.default(payload);
    yield mediaBuzz.save();
    return mediaBuzz;
});
exports.createMediaBuzzToDb = createMediaBuzzToDb;
const getAllMediaBuzzFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMediaBuzz = yield mediaBuzz_model_1.default.aggregate([
        { $project: { title: 1, bannerURL: 1 } },
    ]);
    return allMediaBuzz;
});
exports.getAllMediaBuzzFromDb = getAllMediaBuzzFromDb;
const getBuzzByIdFromDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: payload };
    const event = yield mediaBuzz_model_1.default.findOne(query);
    return event;
});
exports.getBuzzByIdFromDb = getBuzzByIdFromDb;
const addGuestToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { guests: data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addGuestToDb = addGuestToDb;
const addMeetTheGuestVideoToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { meetTheGuestVideos: data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addMeetTheGuestVideoToDb = addMeetTheGuestVideoToDb;
const addSponsorsToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { sponsors: data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addSponsorsToDb = addSponsorsToDb;
const addTopEventToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { eventSessions: data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addTopEventToDb = addTopEventToDb;
const addExhibitionPhotoToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { "photoExhibition.photos": data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addExhibitionPhotoToDb = addExhibitionPhotoToDb;
const addMemoriesPhotoToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { "memories.photos": data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addMemoriesPhotoToDb = addMemoriesPhotoToDb;
const addMemoriesVideoToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { "memories.videos": data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addMemoriesVideoToDb = addMemoriesVideoToDb;
const addTestimonialToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = payload;
    const filter = { _id: id };
    const updateDoc = { $push: { testimonials: data } };
    const options = { upsert: true };
    const document = yield mediaBuzz_model_1.default.updateOne(filter, updateDoc, options);
    return document;
});
exports.addTestimonialToDb = addTestimonialToDb;
