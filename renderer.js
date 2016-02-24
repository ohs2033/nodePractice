var fs = require('fs');
var fakerData  = require('./faker.js');

function inputData(file,values){
	if(values){
			for(var i = 0; i<values.length;i++){
				for(var key in values[i]){
					file=file.replace('{{'+key+i.toString()+'}}',values[i][key]);
				}
		}
	}
	return file;
}


function view(pathName,response,values){
	 var file= fs.readFileSync('./views/'+ pathName+'.html',{encoding: "utf8"});
	 file = inputData(file,values);
	 response.write(file);	 
}



module.exports.view = view;

