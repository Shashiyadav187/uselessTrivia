uselessTrivia.factory('homeFactory', function($http){
	var factory = {};
	
	return factory;
})

uselessTrivia.factory('socketio', function($rootScope){
	var factory = {}
	var socket = io.connect();

	factory.on = function(eventName, callback){
		socket.on(eventName, function(){
			var args = arguments;
			$rootScope.$apply(function(){
				callback.apply(socket, args);
			});
		});
	}

	factory.emit = function(eventName, data, callback){
		console.log(eventName);
		socket.emit(eventName, data, function(){

			var args = arguments;
			$rootScope.$apply(function(){
				if (callback) {
					callback.apply(socket, args);
				}
			});
		});
	}
	return factory
})

uselessTrivia.controller('homeController', function($scope, $rootScope, $location, homeFactory, socketio){
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










