var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./config/mongoose.js');

var server = app.listen(8888, function(){
	console.log('You are tuned in to port 8888');
})

var questions = require('./server/controllers/question.js');
var games = require('./server/controllers/games.js');
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

	socket.on('gamePlayed', function(data){
		games.socketCreate(data, function(results){
			socket.emit('results', results);
		});
	});

	socket.on('getGames', function(data){
		games.socketShow(function(games){
			socket.emit('allGames', games);
		});
	});

	socket.on('getQuestions', function(data){
		questions.socketShow(data, function(questions){
			socket.emit('allQuestions', questions);
		});
	});

	socket.on('addQuestion', function(data){
		questions.socketCreate(data);
	});
		
});
