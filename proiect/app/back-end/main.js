import express from 'express';
import { router as articleRouter } from './routes/articleRoutes.js';
import { router as conferenceRouter } from './routes/conferenceRoutes.js';
import { router as userRouter } from './routes/userRoutes.js';
import { db } from './models/config.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/articles', articleRouter);
app.use('/conferences', conferenceRouter);
app.use('/users', userRouter);
db.sync()
  .then(() => {
    console.log('Connected to the database');
    // Pornirea serverului
    app.listen(PORT, () => {
		console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });