var fs = require('promised-io/fs'), gStat, gFd;

var open = function (stat) {
        gStat = stat;
        return fs.open('input.txt', 'r+');
    },
    read = function (fd) {
        gFd = fd;
        return fs.read(fd, new Buffer(gStat.size), 0, gStat.size, null);
    },
    close = function (args) {
        console.log(args[1].toString());
        return fs.close(gFd);
    },
    catchall = function (err) {
        console.log(err);
    },
    finished = function () {
        console.log('File Handle closed');
    };

fs.stat('input.txt')
    .then(open)
    .then(read)
    .then(close)
    .then(finished, catchall);
