var n2 = require('nitrogen');

var config = {};
config.store = new n2.FileStore(config);

module.exports = config;
