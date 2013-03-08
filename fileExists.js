var fs = require('fs'),
    filename = process.argv[2] || 'input.txt';

fs.exists(filename, function (exists) {
    if (exists) {
        console.log('File exists');
        return true;
    }
    console.error('There is no such file');
    return false;
});