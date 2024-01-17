import { db } from "./config.js";
import { DataTypes } from "sequelize";
import { User } from "./users.js";

export const Article = db.define("Article", {
  title: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  authorId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewer1Id: {
    type: DataTypes.STRING,
  },
  reviewer2Id: {
    type: DataTypes.STRING,
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