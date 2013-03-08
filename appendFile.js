var fs = require('fs'),
    data = process.argv[2] || 'Hello my World';

fs.appendFile('input.txt', data, function (err) {
    if (err) {
        console.error('Could not write into file');
        return false;
    }
    console.log('Success!');
    return true;
});