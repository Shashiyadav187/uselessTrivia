//require mongoose to commuicate with MongoDB
var mongoose = require('mongoose');
//question model to save and retrieve the quiz questions from the database
var Schema = mongoose.Schema;

//define the MongoDB question collections
var QuestionSchema = new mongoose.Schema({
	question: String,
	answers: {},
	correctAnswer: String,
	created_at: Date
});

//creates the mongoDB collection in the databse
mongoose.model('Question', QuestionSchema);