var fs = require('fs');
var request = require('request');

request('http://study.163.com/course/introduction/1165006.htm#/courseDetail', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
}).pipe(fs.createWriteStream("163Download.html"));

//console.log(fs.exist("163Download.html"));
