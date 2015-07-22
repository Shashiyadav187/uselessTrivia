uselessTrivia.controller('questionController', function($scope, $location, $rootScope, socketio){
	if(!$rootScope.player){
		$location.path('/');
	}

	//sends a new question from the client to the server
	$scope.addQuestion = function(){
		$scope.newQuestion.correctAnswer = $scope.newQuestion.answers[$scope.newQuestion.correctAnswer];
		socketio.emit('addQuestion', $scope.newQuestion);
		$location.path('/');
	}

	//loads the home page
	$scope.goHome = function(){
		$location.path('/');
	}
	
})








