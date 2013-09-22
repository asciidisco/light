var nitrogen = require('nitrogen');

var config = {};
config.store = new nitrogen.FileStore(config);

module.exports = config;
