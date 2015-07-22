var express = require('express');
var path = require('path');
var app = express();

// static folder set for Angular
app.use(express.static(path.join(__dirname, './client')));
require('./config/mongoose.js');

//start up the server on port 8888
var server = app.listen(8888, function(){
	console.log('You are tuned in to port 8888');
});

//requires sockets file for communication with the client
require('./config/sockets.js')(server);
