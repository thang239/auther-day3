'use strict';

var https = require('https'),
	fs = require('fs');

var app = require('./app'),
	db = require('./db');

var secureConfig = {
	cert: fs.readFileSync(__dirname + '/cert.pem'),
	key: fs.readFileSync(__dirname + '/key.pem')
};

var port = 8443;
var server = https.createServer(secureConfig, app).listen(port, function () {
	console.log('HTTPS server patiently listening on port', port);
});

module.exports = server;