var fs = require('fs');
food = {name:"beef"};

var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
logStream.write('{name:"beef"}');
logStream.end();

// http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node
