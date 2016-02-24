var http = require('http');
var router = require('./router.js');

function onRequest(req,res){
	router.home(req,res);
	router.user(req,res);
	res.end();
}

http.createServer(onRequest).listen(3000);

