var faker = require('faker');
var DataArray =[];
for (var i =0; i<10; i++){
	DataArray.push({
		"name" : faker.name.findName(),
		"avatar" : faker.image.avatar(),
		"email" : faker.internet.email()
	});
}

module.exports.data = DataArray;
