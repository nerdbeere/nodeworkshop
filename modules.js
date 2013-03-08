var validator = require('./validator.js'),
    mail = ['sebastian.springer@mayflower.de', 'Invalid Address'];


for (var i = 0; i < mail.length; i++) {
    if (validator.email(mail[i])) {
        console.log((i + 1) + '. Mailadresse ist gültig');
    } else {
        console.log((i + 1) + '. Mailadresse ist ungültig');
    }
}

