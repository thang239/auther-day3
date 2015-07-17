'use strict'; 

var mongoose = require('mongoose'),
	shortid = require('shortid'),
	crypto = require('crypto'),
	_ = require('lodash');

var db = require('../../db');
var Story = require('../stories/story.model');

var User = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: String,
	photo: String,
	phone: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	hashedPassword: String,
	salt: {
		type: String,
		default: makeSalt
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
});

function makeSalt () {
	return crypto.randomBytes(16).toString('base64');
}

User.virtual('password').set(function (plaintext) {
	this.hashedPassword = this.hash(plaintext);
});

User.methods.hash = function (plaintext) {
	return crypto.pbkdf2Sync(plaintext, this.salt, 10000, 64).toString('base64');
};

User.statics.findByEmails = function (set) {
	return this.find({emails: {$elemMatch: {$in: set}}});
};

User.statics.findByEmail = function (email) {
	return this.findOne({email: email});
};

User.methods.authenticate = function (attempt) {
	return this.hash(attempt) === this.hashedPassword;
};

User.methods.getStories = function () {
	return Story.find({author: this._id}).exec();
};

module.exports = db.model('User', User);