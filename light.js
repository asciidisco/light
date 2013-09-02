var config = require('./config')
  , MockPin = require('./mockPin')
  , n2 = require('nitrogen');

var service = new n2.Service(config);

var light = new MockPin({
    nickname: 'light',
});

service.connect(light, function(err, session, light) {
    if (err) return console.log('failed to connect light: ' + err);

    var switchManager = new n2.SwitchManager(light);
    switchManager.start(session, { $or: [ { to: light.id }, { from: light.id } ] }, function(err) {
	if (err) return console.log('switchManager failed to start: ' + err);
    });

});
