import { Article } from "../models/articles.js";

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
  const { title, content, authorId } = req.body;
  
  const getRandomReviewers = async () => {
    try {
      const reviewers = await User.findAll({
        attributes: ['username'],
        where: { type: 'reviewer' },
      });
  
      if (reviewers.length < 2) {
        throw new Error("Not enough reviewers available.");
      }
  
      const randomIndices = getRandomIndices(2, reviewers.length);
      const randomReviewers = randomIndices.map(index => reviewers[index]);
  
      return randomReviewers;
    } catch (err) {
      console.error("Error getting random reviewers:", err);
      throw new Error("Unable to get random reviewers");
    }
  };
  const randomReviewers = await getRandomReviewers();
  try { 
    const newArticle = await Article.create({
      title,
      content,
      authorId,
      reviewer1Id: randomReviewers[0].id,
      reviewer2Id: randomReviewers[1].id
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
};