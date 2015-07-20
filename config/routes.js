var questions = require('./../server/controllers/question.js');

module.exports = function(app){
	app.post('/newquestion', function(req, res){
		questions.create(req, res);
		
	});

	app.get('/questions', function(req, res){
		questions.show(req, res);
	});
}