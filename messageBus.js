var EventEmitter = require('events').EventEmitter,
    util = require('util');

var MessageBus = function () {};

util.inherits(MessageBus, EventEmitter);

exports.MessageBus = MessageBus;