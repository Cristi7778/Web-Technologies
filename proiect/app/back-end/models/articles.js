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