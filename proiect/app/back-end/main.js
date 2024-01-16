import {synchronizeDatabase} from './models/config.js';
import { Article } from './models/articles.js';
import { User } from './models/users.js';
import { Conference } from './models/conferences.js';
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