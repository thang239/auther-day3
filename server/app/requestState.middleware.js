'use strict'; 

var router = require('express').Router(),
	bodyParser = require('body-parser'),
	session = require('express-session');

var User = require('../api/users/user.model');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.use(session({
	secret: 'tongiscool',
	cookie: {
		secure: true,
		resave: false,
		saveUninitialized: false
	}
}));

module.exports = router;