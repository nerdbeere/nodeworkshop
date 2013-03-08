var os = require('os');

console.log('Betriebssystem: ' +
    os.type() + ' ' +
    os.platform() + ' ' +
    os.release() +  ' ' +
    os.arch());


