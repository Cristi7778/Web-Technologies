import { Article } from "../models/articles.js";
const allReviewers = ["dana","ioana","iulia","alexandra","oana"];
const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).send({ records: articles });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const getArticleById = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).send({ message: "Article not found." });
    }

    res.status(200).send({ article: article });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const createArticle = async (req, res) => {
  const { title, content, authorId, reviewer1Id, reviewer2Id } = req.body;

  try {
    const newArticle = await Article.create({
      title,
      content,
      authorId,
      reviewer1Id,
      reviewer2Id,
    });

    res.status(201).send({ message: "Article created", article: newArticle });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};
const updateArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).send({ message: "Article not found." });
    }

    const updatedArticle = await article.update(req.body);

    res.status(200).send({ message: "Article updated", article: updatedArticle });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};
const deleteArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).send({ message: "Article not found." });
    }

    await article.destroy();

    res.status(200).send({ message: "Article deleted" });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

export {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
}