var fs = require('fs')
    filename = process.argv[2] || 'input.txt';

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
        console.error("File cound not be opened");
        return false;
    }
    console.log(data);
    return true;
});