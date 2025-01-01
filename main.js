import express from 'express';
import MoviesRoutes from './routes/movies.routes.js'
import connectDB from './lib/db.js' 

const app = express();
const PORT = 3000;

// Connect mongodb server
connectDB();


app.listen(PORT, () => {
    console.log(`listening on port at http://localhost:${PORT}`)
});

// CRUD operations
app.use('/movies', MoviesRoutes);