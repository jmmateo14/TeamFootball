var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    foundation: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    stadium: {
        type: String
    },
    stars_player: {
        type: [String]
    },
    image_url: {
        type: String
    }
});

mongoose.model('Team', teamSchema); 
