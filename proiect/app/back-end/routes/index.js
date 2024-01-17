import express from 'express';
import { router as articleRouter } from './articles.js';
import { router as userRouter } from './users.js';
import { router as conferenceRouter } from './conferences.js';

export const router = express.Router();

// Adăugați rutele specifice pentru Article, User și Conference
router.use("/articles", articleRouter);
router.use("/users", userRouter);
router.use("/conferences", conferenceRouter);