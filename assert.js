var assert = require('assert'),
    actual = 'Hello World',
    expected = 'Hello World';

assert.equal(actual, expected, 'Strings are not Equal');

assert.notEqual(actual, expected, 'Strings are Equal');

assert.fail('FAIL!', 'PASS!', 'This fails!');