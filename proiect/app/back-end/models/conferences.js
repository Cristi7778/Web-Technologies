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

// Relație 1:N între User și Conference pentru a indica organizatorul
Conference.belongsTo(User, { as: 'organizer', foreignKey: 'organizerId' });
export const userTypesEnum = ['organizer', 'reviewer', 'author'];
Conference.hasOne(Article, { foreignKey: 'articleId' });