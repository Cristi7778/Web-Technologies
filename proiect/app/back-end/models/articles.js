import { db } from "./config.js";
import { DataTypes } from "sequelize";

export const Article = db.define("Article", {
  title: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Adăugăm doi revieweri pentru fiecare articol
  reviewer1Id: {
    type: DataTypes.INTEGER,
  },
  reviewer2Id: {
    type: DataTypes.INTEGER,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['title']
    }
  ]
});
Article.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
Article.belongsTo(User, { as: 'reviewer1', foreignKey: 'reviewer1Id' });
Article.belongsTo(User, { as: 'reviewer2', foreignKey: 'reviewer2Id' });