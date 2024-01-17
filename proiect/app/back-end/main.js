import express from 'express';
import cors from 'cors';
import { router as indexRouter } from './routes/index.js';
import { synchronizeDatabase } from './models/config.js';
import { Article } from './models/articles.js';
import { User } from './models/users.js';
import { Conference } from './models/conferences.js';
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

// Atașarea routerului exportat de fișierul de agregare a rutelor
app.use("/", indexRouter);

const server = app.listen(PORT, async () => {
    try {
        // Apelăm metoda care va sincroniza modelele definite în cadrul aplicației cu baza de date
        await synchronizeDatabase();
        console.log(`Server started on http://localhost:${PORT}`);
    } catch (err) {
        console.log("There was an error with the database connection");
        // Dacă apare o eroare în momentul sincronizării bazei de date, vom opri aplicația
        server.close();
    }
});