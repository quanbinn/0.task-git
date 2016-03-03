var fs = require('fs');
var request = require('request');

var urlOfFood = process.argv[2];

request(urlOfFood).pipe(fs.createWriteStream("food.csv"));
console.log(fs.exist('food.csv'));
console.log(fs.exist('food.csv'));
console.log(fs.exist('food.csv'));
