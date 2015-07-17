'use strict';

var router = require('express').Router();
var Auth = require('../utils/auth.middleware');

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

module.exports = router;