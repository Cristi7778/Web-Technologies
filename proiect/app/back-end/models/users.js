import {db} from "./config.js";
import {DataTypes, ENUM} from "sequelize";

export const User = db.define("User", {
	username: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
    type: {
        type:DataTypes.userTypesEnum,
        allowNull:false
    }
},
{
	indexes: [
		{
			unique: true,
			fields: ['username','password']
		}
	]
});
const userTypesEnum = ['organizer', 'reviewer', 'author'];
