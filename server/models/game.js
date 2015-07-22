//require mongoose to commuicate with MongoDB
var mongoose = require('mongoose');
//quiz model to save and retrieve the quiz results from the database
var Schema = mongoose.Schema;

//define the MongoDB games collections
var GameSchema = new mongoose.Schema({
	player: String,
	score: String,
	percentage: Number,
	created_at: Date
});

//creates the mongoDB collection in the databse
mongoose.model('Game', GameSchema);