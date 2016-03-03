fs = require('fs');

food = {name: "egg"};
/*
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
*/

fs.appendFile('helloworld.txt', "food", function (err) {
  if (err) return console.log(err);
  console.log('adding data');
});
