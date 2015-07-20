var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
	question: String,
	answers: {},
	correctAnswer: String,
	created_at: Date
});

mongoose.model('Question', QuestionSchema);