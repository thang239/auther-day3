'use strict';

var express = require('express'),
	router = express.Router(),
	path = require('path');

var HttpError = require('../utils/HttpError');

var rootPath = path.join(__dirname, '..', '..');

var publicPath = path.join(rootPath, 'public');
var browserPath = path.join(rootPath, 'browser');
var bowerPath = path.join(rootPath, 'bower_components');

router.use(express.static(publicPath));

router.use('/browser', express.static(browserPath), HttpError(404).middleware);

router.use('/bower_components', express.static(bowerPath), HttpError(404).middleware);

module.exports = router;