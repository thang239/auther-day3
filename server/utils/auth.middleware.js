'use strict';

var HttpError = require('./HttpError');
var User = require('../api/users/user.model');

var Auth = {};

Auth.isAuthenticated = function (req, res, next) {
	if (req.session.userId) next();
	else next(HttpError(401));
};

Auth.isAdmin = function (req, res, next) {
	User.findById(req.session.userId).exec()
	.then(function (user) {
		if (user && user.isAdmin) next();
		else next(HttpError(403));
	})
}

module.exports = Auth;