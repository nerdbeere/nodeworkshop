var http = require('http'),
    prime = require('./cp1.js');

http.createServer(function (req, res) {
    console.time('Request answered in');
    console.log('incoming Request');

    var number = prime();

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

    console.timeEnd('Request answered in');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');