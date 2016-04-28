/* var fs = require('fs');
var request = require('request');

request('https://ndb.nal.usda.gov/ndb/foods/show/112?format=Abridged&reportfmt=csv').pipe(fs.createWriteStream("food.csv"));
*/

var request = require('request');
request('https://ndb.nal.usda.gov/ndb/foods/show/112?format=Abridged&reportfmt=csv', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
