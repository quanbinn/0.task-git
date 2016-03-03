var request = require('request');

var urlOfFood = process.argv[2];

request(urlOfFood, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
