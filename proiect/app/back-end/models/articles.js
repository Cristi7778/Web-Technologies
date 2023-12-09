import {db} from "./config.js";
import {DataTypes, ENUM} from "sequelize";
export const Article = db.define("Article", {
    reviewer1: {
		type: DataTypes.STRING,
		allowNull:false
	},
	reviewer2: {
		type: DataTypes.STRING,
		allowNull: false
	},
    title: {
        type:DataTypes.STRING,
        primaryKey:true
    },
    content:{
        type:DataTypes.STRING,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    approved:{
        type:DataTypes.BOOLEAN,
    }
},
{
	indexes: [
		{
			unique: true,
			fields: ['title']
		}
	]
});
