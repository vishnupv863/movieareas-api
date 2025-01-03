import mongoose from 'mongoose';
import Movie from '../models/movie.models.js'


export const movieIndex = async (req,res) => {
    try {
        const movie_list = await Movie.find()
        return res.status(200).json(movie_list);
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

export const singleMovieIndex = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        console.log(req.params.id)
        return res.status(200).json(movie)
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}


export const movieCreater = async (req, res) => {
    try {
        const newMovie = new Movie({
            title:req.body.title,
            description:req.body.description
        });
    
        await newMovie.save();
        return res.status(201).json({message:'movies created', movie:newMovie})

    } catch (error) {
        console.log('error occured', error)
        return res.status(400).json({message:error.message})
    }
};


export const movieUpdator = async (req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, description: req.body.description },
            { new: true }
        );

        console.log(req.params.id )
        return res.status(200).send(updatedMovie);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const movieDeletor = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({message : 'invalid ID as ID does not exist'})
    }
    try {
        const movie = await Movie.findById(req.params.id);
        await movie.deleteOne();
        const updatedMovies = await Movie.find();
        return res.status(200).json(updatedMovies);
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}

