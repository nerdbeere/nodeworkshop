var MessageBus = require('./messageBus.js').MessageBus;

var mb = new MessageBus();

mb.on('message', function (data) {
    console.log('Received new message: ' + data)
});

mb.emit('message', 'Hello World');