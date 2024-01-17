import express from 'express';
import * as conferenceController from "../controllers/conferences.js";

export const router = express.Router();
router.get("/", conferenceController.getConferences);
router.get("/:id", conferenceController.getConferenceById);
router.post("/", conferenceController.createConference);
router.delete("/:id", conferenceController.deleteConference);