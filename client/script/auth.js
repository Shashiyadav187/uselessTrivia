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