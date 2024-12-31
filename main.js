import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({message:'hello developers'})
});

app.listen(PORT, () => {
    console.log(`listening on port at http://localhost:${PORT}`)
});