'use strict';

var router = require('express').Router();
var User = require('../api/users/user.model');

router.get('/logout', function (req, res, next) {
	req.session.userId = null;
	res.status(200).end();
});

router.post('/login', function (req, res, next) {
	// find user by email and password
	// if they exist send them back to the frontend
	// if they don't error 401
	User.findByEmail(req.body.email).exec()
	.then(function (user) {
		if (user && user.authenticate(req.body.password)) {
			req.session.userId = user._id;
			res.json(user);
			return;
		}
		// did not find user
		var err = new Error('Not Authenticated');
		err.status = 401;
		next(err);
	})
	// error with query/db
	.then(null, next);
});

module.exports = router;