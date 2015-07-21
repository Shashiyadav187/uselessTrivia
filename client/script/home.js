uselessTrivia.controller('homeController', function($scope, $rootScope, $location, socketio){
	$scope.products;
	
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

uselessTrivia.controller('authController', function($scope, $rootScope, $location, $cookieStore){
	var player;
	if($cookieStore.get('userName')){
		player = $cookieStore.get('userName');
	}

	if(player){
		$rootScope.player = player;
	}

	$scope.enterName = function(){
		$cookieStore.put('userName', $scope.user.name);
		$rootScope.player = $scope.user.name;
		$scope.user.name='';
	}

	$scope.logout = function(){
		$cookieStore.remove('userName');
		$rootScope.player = null;
		$location.path('/');
	}
})










