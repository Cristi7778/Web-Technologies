import { db } from "./config.js";
import { DataTypes } from "sequelize";
import { User } from "./users.js"; 
import { Article } from "./articles.js";

export const Conference = db.define("Conference", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
  location: {
    type: DataTypes.STRING,
  },
  organizerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  articleId:{
    type:DataTypes.INTEGER,
  }
});
export const userTypesEnum = ['organizer', 'reviewer', 'author'];