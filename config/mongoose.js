var mongoose = require('mongoose');
var fs = require('fs');
//enter the name of the new Database after local host ->This will create the new DB
mongoose.connect('mongodb://localhost/uselessTrivia');
//This sets the different models needed
var models_path = __dirname +'/../server/models'
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
		require(models_path + '/' + file);
	}
})