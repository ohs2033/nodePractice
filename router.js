var querystring = require('querystring');
var renderer = require('./renderer.js');
var fakerData  = require('./faker.js');


var home = function(req,res){
	
	if(req.url === "/"){
		if(req.method.toLowerCase() ==='get'){
			renderer.view('header',res);
			renderer.view('body',res,fakerData.data);
			renderer.view('footer',res);
		}else{

		}
	};
	res.write('hello world');
//handle url and redirect it to each html pages
}

var user = function(req,res){
	var url = req.url
	var username = req.url
}

var newData = function(req,res){
//if url go to this route, we generate new data with faker.js
}
module.exports.home = home;
module.exports.user = user;
module.exports.newData = newData;

