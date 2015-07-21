uselessTrivia.controller('homeController', function($scope, $rootScope, $location, socketio){
	$scope.play = function(){
		$location.path('/play');
	}

	$scope.question = function(){
		$location.path('/newquestion');
	}

	socketio.emit('getGames');

	socketio.on('allGames', function(socket, args){
		$scope.games = socket;
	});

})

