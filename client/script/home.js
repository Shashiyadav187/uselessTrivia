uselessTrivia.controller('homeController', function($scope, $rootScope, $location, socketio){
	//loads the quiz page
	$scope.play = function(){
		$location.path('/play');
	}

	//loads the form to add a question
	$scope.question = function(){
		$location.path('/newquestion');
	}

	//requests all scores from the server
	socketio.emit('getGames');

	//recieve all scores from the server
	socketio.on('allGames', function(socket, args){
		$scope.games = socket;
	});

})

