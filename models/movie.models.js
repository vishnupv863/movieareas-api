import { model, Schema } from "mongoose";

//create shema
const schema = new Schema({
    title:{
        type : String,
        required : true,
        unique : true
    },
    description: {
        type : String, 
        required : true
    }
});

//create model
const Movie = model("Movie", schema);

export default Movie
