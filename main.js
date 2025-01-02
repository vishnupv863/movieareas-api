import express from 'express';
import MoviesRoutes from './routes/movies.routes.js';
import connectDB from './lib/db.js';

const app = express();
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/movies', MoviesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
