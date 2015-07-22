
var questions = require('./../server/controllers/question.js');
var games = require('./../server/controllers/games.js');
module.exports = function(server){

var io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket){

		//sends results to the controller to add to the database
		socket.on('gamePlayed', function(data){
			games.socketCreate(data, function(results, err){
				if(err){
					//error handling if there is a problem with the DB
					socket.emit('error', err);
				} else {
					//sends the results back to the client
					socket.emit('results', results);
				}
			});
		});

		//get all scores from the database for the home screen
		socket.on('getGames', function(data){
			games.socketShow(function(games, err){
				if(err){
					//error handling if there is a problem with the DB
					socket.emit('err', err);
				} else {
				//sends all scores to the client
				socket.emit('allGames', games);
				}
			});
		});

		//Pull all questions from the database for the quiz
		socket.on('getQuestions', function(data){
			questions.socketShow(data, function(questions, err){
				if(err){
					//error handling if there is a problem with the DB
					socket.emit('err', err);
				} else {
					//sends all questions to the client
					socket.emit('allQuestions', questions);
				}
			});
		});
					
		//recieves new question from the clien
		socket.on('addQuestion', function(data){
			//sends question to the controller
			questions.socketCreate(data, function(err){
				if(err){
					//error handling if there is a problem with the DB
					socket.emit('err', err);
				}
			});
		});
			
	});
}