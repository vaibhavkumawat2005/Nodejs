const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    posterImage: {
        type: String,
        required: false,
    },
    Rating: {
        type: Number,   
        required: true,
        min: 0,
        max: 10,
    },
    releaseDate: {  
        type: Date,
        required: true,
    },



},
    { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);