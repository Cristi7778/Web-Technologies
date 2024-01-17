import express from 'express';
import cors from 'cors';
import { router as indexRouter } from './routes/index.js';
import { synchronizeDatabase } from './models/config.js';
import { Article } from './models/articles.js';
import { User } from './models/users.js';
import { Conference } from './models/conferences.js';

const PORT = 3000;

// Definirea relațiilor
// Many-to-Many pentru Articles și Users
Article.belongsToMany(User, { through: "article_reviewers", as: "Reviewers" });
User.belongsToMany(Article, { through: "article_reviewers", as: "Articles" });

// One-to-Many/Many-to-One pentru User și Conference
User.hasMany(Conference, { foreignKey: 'organizerId', as: 'OrganizedConferences' });
Conference.belongsTo(User, { foreignKey: 'organizerId', as: 'Organizer' });

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