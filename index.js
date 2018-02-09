module.exports = {
    version: function () { return require('./package').version; },
    wrap: require('./src/gaffer-tape-wrap'),
    unwrap: require('./src/gaffer-tape-unwrap')
};