//require mongoose to commuicate with MongoDB
var mongoose = require('mongoose');
//question model to save and retrieve the quiz questions from the database
var Game = mongoose.model('Game');

module.exports = (function(){
	return {
		
		//pull all scores from the database
		socketShow: function(callback){
			Game.find({}, function(err, results){
				if (err) {
					//error handling if there is a problem with the DB
					callback(results, err);
				}
				else{
					//sends games back to client
					callback(results);
				}
			})
		},

		//enter a new score to the database
		socketCreate: function(data, callback){

			//creates a new instance of a Game document
			var game = new Game({
				player: data.name,
				score: data.score,
				percentage: data.percentage,
				created_at: new Date
			});

			game.save(function(err, results){
				if(err){
					//error handling if there is a problem with the DB
					callback(results, err);
				} else{
					//sends results back to the client
					callback(results);
				}
			});
		}

	}
})();