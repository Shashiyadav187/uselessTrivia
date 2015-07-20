var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new mongoose.Schema({
	player: String,
	score: String,
	percentage: Number,
	created_at: Date
});

mongoose.model('Game', GameSchema);