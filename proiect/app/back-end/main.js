import {synchronizeDatabase} from './models/config.js';
import { Article } from './models/articles.js';
import { User } from './models/users.js';
import { Conference } from './models/conferences.js';

// definirea relatiilor
// Many-to-Many
Movie.belongsToMany(Collection, {through: "movie_collections"});
Collection.belongsToMany(Movie, {through: "movie_collections"});

// One-to-Many/Many-to-One
Conference.hasOne(User);
User.belongsTo(Conference);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

const server = app.listen(PORT, async () => {
	try {
		await synchronizeDatabase();
		console.log(`Server started on http://localhost:${PORT}`);
	} catch (err) {
		console.log("There was an error with the database connection");
		server.close();
	}
});