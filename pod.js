step1(function (value1) {
    step2(value1, function (value2) {
        step3(value2, function (value3) {
            step3(value3, function (value4) {
                // do something
            });
        });
    });
});