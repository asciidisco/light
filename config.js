var nitrogen = require('nitrogen');

var config = {
    pin: 17
};
config.store = new nitrogen.FileStore(config);

module.exports = config;
