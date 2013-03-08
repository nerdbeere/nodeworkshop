var fs = require('fs');

fs.exists('input.txt', function (exists) {
    fs.stat('input.txt', function (err, stats) {
        fs.open('input.txt', 'r+', function (err, fd) {
            fs.read(fd, new Buffer(stats.size), 0, stats.size, null, function (err, read, buff) {
                    if (err) throw err;
                    console.log(buff.toString());
                fs.close(fd, function () {
                    console.log('File Handle closed');
                });
            })
        });
    });
});
