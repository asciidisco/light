var config = require('./config')
  , GPIOPin = require('nitrogen-gpio-pin')
  , nitrogen = require('nitrogen');

// A Nitrogen service is the endpoint that this device connect to.
var service = new nitrogen.Service(config);

// Pin is a nitrogen device principal that knows how to drive a particular Raspberry Pi to 0 or 1.
// We are using this pin to turn on and off the power for the light.  
var light = new GPIOPin({
    nickname: 'light',
    capabilities: [ 'switchCommand' ]
    config: config
});

// Connect the light to the service:
// 1. If it hasn't been provisioned before, the service will create credentials and the device will
//    store them locally in LevelDB.
// 2. If it does have credentials, the service will authenticate these.
// 3. The service initiates a session, which includes both access tokens to use the service and 
//    a websocket connection to do realtime messaging over.
service.connect(light, function(err, session) {
    if (err) return console.log('failed to connect light: ' + err);

    // Start a switchManager. A commandManager in Nitrogen follows a device's message stream
    // and executes commands against the passed device as required.
    //
    // In this case, as switchCommands are received, the SwitchManager will execute them against 
    // the light.
    new nitrogen.SwitchManager(light).start(session, function(err, message) {
	       if (err) return session.log.error('light switchManager reported error: ' + err);
    });
});
