var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {

		socketShow: function(data, callback){
			Question.find({}, function(err, results){
				if (err) {
					console.log(err);
				}
				else{
					callback(results);
				}
			})
		},

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