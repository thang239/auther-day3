'use strict'; 

var app = require('express')();
var path = require('path');

app.use(require('./logging.middleware'));

app.use(require('./sass.middleware'));

app.use(require('./statics.middleware'));

app.use(require('./requestState.middleware'));

app.use('/auth', require('../auth'));

app.use('/api', require('../api'));

app.get('/*', function (req, res) {
	var index = path.join(__dirname, '..', '..', 'public', 'index.html');
	res.sendFile(index);
});

app.use(require('./error.middleware'));

module.exports = app;