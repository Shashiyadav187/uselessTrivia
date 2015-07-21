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