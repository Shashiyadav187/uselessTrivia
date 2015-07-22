//mongoose to communicate with the MongoDB database
var mongoose = require('mongoose');
//question model to save and retrieve the quiz questions from the database
var Question = mongoose.model('Question');

module.exports = (function(){
	return {

		//pulls the all questions from the database
		socketShow: function(data, callback){
			Question.find({}, function(err, results){
				if (err) {
					callback(null, err);
				}
				else{
					callback(results);
				}
			})
		},

		//enter a new question into the database
		socketCreate: function(data, callback){	
			var question = new Question({
				question: data.question,
				answers: data.answers,
				correctAnswer: data.correctAnswer,
				created_at: new Date
			});
			question.save(function(err, results){
				if(err){
					console.log(err);
				}
			});
		}

	}
})();