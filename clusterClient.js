var http = require('http');

for (var i = 0; i < 100; i++) {
    http.get('http://localhost:8000', function (res) {
        console.log(res);
    });
}
