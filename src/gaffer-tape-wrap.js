'use strict';

var nvl = require('./nvl'),
    Base64 = require('./base64'),
    Cryptr = require('cryptr');

function zip(string) {
    return string; // todo zip if too big
}

/**
 * Wraps object to string
 * @param {Object}      obj       Object to be wrapped
 * @param {null|string} secretKey Encryption secret key
 * @returns {string}
 */
module.exports = function gafferTapeWrap(obj, secretKey) {
    if (typeof obj !== 'object') obj = {error: 'Input is not an object'};
    var fallback = nvl(process.env['GAFFER_SECRET_KEY'], 'Es irrt der Mensch so lang er strebt'),
        cryptr = new Cryptr(nvl(secretKey, fallback));
    return Base64.encode(cryptr.encrypt(zip(JSON.stringify(obj))));
};

