fs = require('fs')

var food = {};
var dataIndex = 3;


fs.readFile('egg-remove-quote.csv', 'utf8', function (err,data) {
	if (err) throw err;

  // step 1: change data to the string
  var beginToProcess = data.toString();

	var regexString = "Energy,kcal,.*";
	var re = new RegExp(regexString, "g");

	// step 2: get the data line of Energy
	var energeyProcessing = beginToProcess.match(re, "regex");
	var energeyProcessing = energeyProcessing[0];
	var energyDataOutput = energeyProcessing.split(',')[dataIndex];

	food.energy = energyDataOutput;

	console.log("binxia is coming");
	console.log(energyDataOutput);
	console.log(food);

});

