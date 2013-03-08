Q.fcall(step1)
    .then(step2)
    .then(step3)
    .then(step4)
    .then(function (value4) {
        // do something with value 4
    }, function (error) {
        // Handle any error from step1 through step4
    })
    .end();