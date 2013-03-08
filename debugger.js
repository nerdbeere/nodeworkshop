var myObj = {a: 1, b: 2};

console.log(myObj);

myObj.a = 'Hello';

console.log(myObj);

for (var i = 0; i < 10; i++) {
    var helper = function () {
        // do something
        console.log(i)
    };
    helper();
}
