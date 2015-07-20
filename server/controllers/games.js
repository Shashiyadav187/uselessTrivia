var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports = (function(){
	return {
		socketShow: function(callback){
			Game.find({}, function(err, results){
				if (err) {
					console.log(err);
				}
				else{
					callback(results);
				}
			})
		},

		socketCreate: function(data, callback){
			var game = new Game({
				player: data.name,
				score: data.score,
				percentage: data.percentage,
				created_at: new Date
			});
			game.save(function(err, results){
				if(err){
					console.log(err);
				} else{
					callback(results);
				}
			});
		}
		
	}
})();