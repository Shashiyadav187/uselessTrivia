var uselessTrivia = angular.module('uselessTrivia', ['ngRoute', 'ngCookies']);
uselessTrivia.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: '/partials/home.html'
		})
		.when('/newquestion', {
			templateUrl: '/partials/question.html'
		})
		.when('/play', {
			templateUrl: '/partials/quiz.html'
		})
		.when('/oops', {
			templateUrl: '/partials/err.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});