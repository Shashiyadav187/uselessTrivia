uselessTrivia.controller('authController', function($scope, $rootScope, $location, $cookieStore, socketio){
	//if cookies have been saved, this sets the players name from the cookie
	var player;
	if($cookieStore.get('userName')){
		player = $cookieStore.get('userName');
	}
	//if player is set from cookie, sets rootScope player name for all pages
	if(player){
		$rootScope.player = player;
	}

	//takes the players name from the form in the header and sets cookies and rootScope
	$scope.enterName = function(){
		$cookieStore.put('userName', $scope.user.name);
		$rootScope.player = $scope.user.name;
		$scope.user.name='';
	}

	//delete users info from cookies and rootScope
	$scope.logout = function(){
		$cookieStore.remove('userName');
		$rootScope.player = null;
		$location.path('/');
	}

	//takes the player home from the error page
	$scope.errorHome = function(){
		$location.path('/');
	}

	//if an error occurs on the database loads error page
	socketio.on('err', function(err){
		$location.path('/oops');
	});

})