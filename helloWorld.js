var Star = function () {
    this.name = 'X',
    this.height = 20,
    this.step = 2;
};

Star.prototype.top = function() {
    var output = '', result = [];
    for (var i = 0; i < this.height; i++) {
        for (var j = 0; j < i; j++) {
            for (var k = 0; k < this.step; k++) {
                output += ' ';
            }
        }
        output += this.name;

        output = this.topHelper(output, i);
        output = this.topHelper(output, i);

        result.push(output);
        output = '';
    }
    return result;
};

Star.prototype.topHelper = function (output, i) {
    var result = output;
    for (var j = 0; j < this.height - i; j++) {
        for (var k = 0; k < this.step; k++) {
            result += ' ';
        }
    }
    result += this.name;
    return result;
};

Star.prototype.middle = function () {
    var output = '';
    for (var i = 0; i < (this.height + 1) * this.step * 2 + 1; i++) {
        output += this.name;
    }
    return output;
};

Star.prototype.bottom = function () {
    var output = '', result = [];
    for (var i = 0; i < this.height; i++) {
        for (var j = 0; j <= this.height - i - 2; j++) {
            for (var k = 0; k < this.step; k++) {
                output += ' ';
            }
        }
        output += this.name;

        output = this.bottomHelper(output, i);
        output = this.bottomHelper(output, i);

        result.push(output);
        output = '';
    }
    return result;
};

Star.prototype.bottomHelper = function (output, i) {
    var result = output;
    for (var j = 0; j < i +1; j++) {
        for (var k = 0; k < this.step; k++) {
            result += ' ';
        }
    }
    result += this.name;
    return result;
}

Star.prototype.print = function () {
    console.log(this.top().join('\n'));
    console.log(this.middle());
    console.log(this.bottom().join('\n'));
}

var star = new Star();
star.print();