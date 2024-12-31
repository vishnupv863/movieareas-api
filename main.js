import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({message:'hello developers'})
});

app.listen(PORT, () => {
    console.log(`listening on port at http://localhost:${PORT}`)
});

// CRUD operations

// R - for reading movies
app.get('/movies', () => {});

// C - for creating movies
app.post('/movies', () => {});

// U - for updating movies
app.put('/movies/:id', () => {});

//D - for deleting movies
app.delete('/movies/:id', () => {});