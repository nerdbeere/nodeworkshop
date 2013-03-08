var fs = require('fs');

fs.watch('input.txt', function (e) {
    if (e === 'change') {
        console.log('File changed');
    } else if (e === 'rename') {
        console.log('File renamed');
    }
});