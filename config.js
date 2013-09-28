var nitrogen = require('nitrogen');

var config = {
    pin: 17
};
config.store = new nitrogen.Store(config);

module.exports = config;
