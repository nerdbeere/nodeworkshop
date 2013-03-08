var http = require('http');

http.createServer(function (req, res) {
    console.time('Request answered in');
    console.log('incoming Request');

    require('child_process').fork('./primeHelper.js')
    .on('message', function (data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('The 300000st prime number is: ' + data.prime);

        console.timeEnd('Request answered in');
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
