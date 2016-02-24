var querystring = require('querystring');
var view = require('./renderer.js');

var home = function(req,res){
	if(req.url === "/");
	res.write('hello world');

//handle url and redirect it to each html pages
}

var user = function(req,res){
	var url = req.url

}

var newData = function(req,res){
//if url go to this route, we generate new data with faker.js
}



module.exports.home = home;
module.exports.user = user;
module.exports.newData = newData;

