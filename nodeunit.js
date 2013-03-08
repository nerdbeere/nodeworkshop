var actual = 'Hello World',
    expected = 'Hello World';
module.exports = {
    setUp: function (callback) {
        // setup before each test
        console.log('setUp');
        callback();
    },
    tearDown: function (callback) {
        // cleanup after each test
        console.log('tearDown');
        callback();
    },
    firstExample: function (test) {
        console.log('firstExample')
        test.equal(actual, expected, 'Strings are not Equal');
        test.done();
    },
    exampleGroup: {
        secondExample: function (test) {
            test.notEqual(actual, expected, 'Strings are Equal');
            test.done();
        },
        thirdExample: function (test) {
            test.fail('FAIL!', 'PASS!', 'This fails!');
            test.done;
        }
    }
}