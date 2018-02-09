'use strict';

var nvl = require('./nvl'),
    Base64 = require('./base64'),
    Cryptr = require('cryptr');

function unzip(string) {
    return string; // todo zip if too big
}

/**
 * Wraps object to string
 * @param {string}      string    Object to be wrapped
 * @param {null|string} secretKey Encryption secret key
 * @returns {Object}
 */
module.exports = function gafferTapeUnwrap(string, secretKey) {
    var obj = {},
        fallback = nvl(process.env['GAFFER_SECRET_KEY'], 'Es irrt der Mensch so lang er strebt'),
        cryptr = new Cryptr(nvl(secretKey, fallback));
    try {
        obj = JSON.parse(unzip(cryptr.decrypt(Base64.decode(string))));
    } catch (err) {
        obj['error'] = true;
        obj['message'] = err.message;
    }
    return obj;
};

