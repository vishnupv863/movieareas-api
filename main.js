import express from 'express';
import MoviesRoutes from './routes/movies.routes.js'

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({message:'hello developers'})
});

app.listen(PORT, () => {
    console.log(`listening on port at http://localhost:${PORT}`)
});

// CRUD operations
app.use('/movies', MoviesRoutes);