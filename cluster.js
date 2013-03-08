var cluster = require('cluster'),
    http = require('http'),
    workers = 2;

if (cluster.isMaster) {
    for (var i = 0; i < workers; i++) {
        cluster.fork();
    }
    cluster.on('exit', function(worker) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    console.log('Worker ' + cluster.worker.process.pid + ' started');

    http.createServer(function(req, res) {

        console.log('Worker ' + cluster.worker.process.pid + ' responds');

        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}
