import express from 'express';

const router = express.Router();

// R - for reading movies
router.get('/', (req,res) => {
    res.send('List of movies')
});

// C - for creating movies
router.post('/', (req,res) => {
    res.send('Create list of movies')
});

// U - for updating movies
router.put('/:id', (req,res) => {
    res.send('Update list of movies')
});

//D - for deleting movies
router.delete('/:id', (req,res) => {
    res.send('Delete list of movies')
});

export default router;