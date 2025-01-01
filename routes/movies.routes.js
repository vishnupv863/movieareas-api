import express from 'express';
import {movieIndex, movieCreater, movieUpdator, movieDeletor} from '../controllers/movie.controllers.js';

const router = express.Router();

// R - for reading movies
router.get('/', movieIndex);

// C - for creating movies
router.post('/', movieCreater);

// U - for updating movies
router.put('/:id', movieUpdator);

//D - for deleting movies
router.delete('/:id', movieDeletor);

export default router;