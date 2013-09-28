var config = require('./config')
  , GPIOPin = require('nitrogen-gpio-pin')
  , nitrogen = require('nitrogen');

var service = new nitrogen.Service(config);

var light = new GPIOPin({
    nickname: 'light',
    config: {
       pin: config.pin
    }
});

service.connect(light, function(err, session, lightUpdated) {
    if (err) return console.log('failed to connect light: ' + err);

    // start a switch manager, which watches for switchCommands to this light and 
    // reacts appropriately.
    new nitrogen.SwitchManager(light).start(session, function(err, message) {
	       if (err) return session.log.error('light switchManager reported error: ' + err);
    });
});
