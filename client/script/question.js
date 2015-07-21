uselessTrivia.controller('questionController', function($scope, $location, $rootScope, socketio){
	if(!$rootScope.player){
		$location.path('/');
	}
	$scope.addQuestion = function(){
		$scope.newQuestion.correctAnswer = $scope.newQuestion.answers[$scope.newQuestion.correctAnswer];
		socketio.emit('addQuestion', $scope.newQuestion);
		$location.path('/');
	}

	$scope.goHome = function(){
		$location.path('/');
	}

})








