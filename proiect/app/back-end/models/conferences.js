import {db} from "./config.js";
import {DataTypes, ENUM} from "sequelize";
export const Conference = db.define("Conference", {
    id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
    },
    organizer:{
        type:DataTypes.users,
        allowNull:false
    },
    author:{
        type:DataTypes.users
    },
    reviewers:{
        type:DataTypes.ARRAY(DataTypes.users)
    }
},
{
	indexes: [
		{
			unique: true,
			fields: ['id']
		}
	]
});
