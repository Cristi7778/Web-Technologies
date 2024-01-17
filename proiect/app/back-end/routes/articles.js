import express from 'express';
import * as articleController from "../controllers/articleController.js";

export const router = express.Router();
router.get("/", articleController.getArticles);
router.get("/:id", articleController.getArticleById);
router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);