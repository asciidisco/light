var nitrogen = require('nitrogen');

function MockPin() {
    nitrogen.Device.apply(this, arguments);

    if (!this.config) this.config = {};

    this.capabilities = ['switchCommand'];
  
    this.value = 0;
}

MockPin.prototype = Object.create(nitrogen.Device.prototype);
MockPin.prototype.constructor = MockPin;

MockPin.prototype.set = function(value, callback) {
    console.log('set pin to ' + value);
    this.value = value;
    callback(null, this.value);
};


MockPin.prototype.status = function(callback) {
    var self = this;
    callback(null, { value: this.value } );
};

module.exports = MockPin;
