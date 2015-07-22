var mongoose = require('mongoose');
var fs = require('fs');
//This will create the new DB
mongoose.connect('mongodb://localhost/uselessTrivia');
//This sets the different models needed from the models folder
var models_path = __dirname +'/../server/models'
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
		require(models_path + '/' + file);
	}
})