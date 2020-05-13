const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
// Controller
const authController = require('../controller/auth');
// Models
const User = require('../model/user');
// Signup
router.put(
	'/signup',
	[
		body('email')
			.isEmail()
			.withMessage('Invalid e-mail')
			.custom((value, { req }) => {
				return User.findOne({ email: value }).then((userDoc) => {
					if (userDoc) {
						return Promise.reject('Email already taken');
					}
				});
			})
			.normalizeEmail(),
		body('password')
			.trim()
			.isLength({ min: 5 }),
		body('name').trim(),
	],
	authController.putSignup
);
// Login
router.post('/login', authController.login);
// Exports router
module.exports = router;
