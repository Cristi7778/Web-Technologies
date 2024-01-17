import express from 'express';
import * as articleController from "../controllers/articles.js";

const router = express.Router();

router.get("/articles", articleController.getArticles);
router.get("/articles/:id", articleController.getArticleById);
router.post("/articles", articleController.createArticle);
router.put("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);

// Rute legate de relații pentru articole
// ...

export default router;