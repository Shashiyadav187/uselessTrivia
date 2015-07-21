uselessTrivia.controller('quizController', function($scope, $location, $rootScope, socketio){
	if(!$rootScope.player){
		$location.path('/');
	}

	$scope.played = false;

	// get questions from the server
	socketio.emit('getQuestions');
	socketio.on('allQuestions', function(socket, args){
		createQuiz(socket);
	})
	
	//create the quiz with 5 random questions
	function createQuiz(questions){	
		$scope.questions = questions;
		$scope.quiz = [];
		var randomQuestions = [];
		
		//populates the randomQuestions with 5 random non-repeated questions
		while (randomQuestions.length < 5) {
			var x = $scope.questions.length - Math.ceil(Math.random() * $scope.questions.length);
			var exists = false;
			for (var i = 0; i<randomQuestions.length; i++ ){
				if(randomQuestions[i] == x){ exists = true }
			}
			if(exists == false){ randomQuestions.push(x) }
		}

		//mix up the answers for each question
		var randAnswers = [[0, 1, 2],[1, 0, 2],[2, 0, 1],[2, 1, 0],[0, 1, 2]];
		for(var i = 0; i<randomQuestions.length; i++){
			$scope.quiz.push($scope.questions[randomQuestions[i]]);
			$scope.quiz[i].number = i;
			var answers = [];
			for(var j=0; j<3; j++){
				answers.push($scope.quiz[i].answers[randAnswers[i][j]]);
			}
			$scope.quiz[i].quizAnswers = answers;
		}
	} // end of createQuiz


	$scope.play = function(){
		$scope.played = true;
		var correct = 0;
		
		for(var i = 0; i < Object.keys($scope.answers).length; i++){
			if ($scope.answers[i] == $scope.quiz[i].correctAnswer){
				correct++;
			}
		}
		
		var results = {	"name": $rootScope.player,
										"score": correct + "/5",
										"percentage": ((correct / 5) * 100) }

		socketio.emit('gamePlayed', results);
	} // end of play

	$scope.cancel = function(){
		$location.path('/');
	}

	$scope.playAgain = function(){
		createQuiz($scope.questions);
		$scope.played = false;
	}

	socketio.on('results', function(game, args){
		$scope.resultsPercentage = game.percentage;
		$scope.resultsPlayer = game.player;
		$scope.resultsScore = game.score;
	});

})
