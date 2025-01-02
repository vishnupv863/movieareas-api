export const movieIndex = (req,res) => {
    res.send('movies lists')
}

export const movieCreater = (req, res) => {
    console.log('Request Body:', req.body);  // Log the body to verify it's coming through
    res.json(req.body);                       // Send back the received body
};

export const movieUpdator = (req,res) => {
    res.send('Update list of movies')
}

export const movieDeletor = (req,res) => {
    res.send('Delete list of movies')
}

