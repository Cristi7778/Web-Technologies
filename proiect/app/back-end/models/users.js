import { db } from "./config.js";
import { DataTypes } from "sequelize";
export const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('organizer', 'reviewer', 'author'),
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['username', 'password']
    }
  ]
});
export const userTypesEnum = ['organizer', 'reviewer', 'author'];