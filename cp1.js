module.exports = function () {
    var i, n = 1, results = 1;
    primeLoop: while (results < 300000) {
        n += 1;
        for (i = 2; i <= Math.sqrt(n); i += 1) {
            if (n % i === 0) {
                continue primeLoop;
            }
        }
        results += 1;
    }
    return n;
};