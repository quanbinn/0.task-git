fs = require('fs');

fs.writeFile('log.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!, i is binxia\'s people');
}); // => message.txt erased, contains only 'Hello Node'