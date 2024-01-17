
import express from 'express';
import * as conferenceController from "../controllers/conferenceController.js";

const router = express.Router();

router.get("/conferences", conferenceController.getConferences);
router.get("/conferences/:id", conferenceController.getConferenceById);
router.post("/conferences", conferenceController.createConference);
router.delete("/conferences/:id", conferenceController.deleteConference);

// Alte rute legate de relații pentru conferințe
// ...

export default router;