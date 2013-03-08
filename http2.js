var http = require('http');

http.createServer(function (req, res) {
    var body, status, reqData;

    if (req.headers['user-agent'].search(/MSIE/) != -1) {
        body = 'wrong Browser';
        status = 403;
    } else {
        body = 'Hello Client';
        status = 200;
    }

    req.on('data', function (data) {
        reqData += data;
    }).on('end', function () {
        if (reqData) console.log(reqData);
    });

    res.writeHead(status, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain' });

    res.write(body);

    res.end();
}).listen(8080);