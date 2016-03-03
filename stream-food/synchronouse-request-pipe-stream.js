var fs = require('fs');
var request = require('request');

var urlOfFood = process.argv[2];

request(urlOfFood).pipe(fs.createWriteStream("food.csv"));
//console.log("binxia is coming");
console.log(fs.existsSync('food.csv'));
console.log(fs.existsSync('food.csv'));
console.log(fs.existsSync('food.csv'));
