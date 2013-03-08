var options = {
    hostname: 'www.google.de',
    port: 80,
    path: '/',
    method: 'get'
};

var req = require('http').request(options, function(res) {
    console.log(res);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.write('data\n');
req.end();