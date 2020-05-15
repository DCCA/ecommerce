const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const isAuth = require('../middleware/is-auth');
const adminController = require('../controller/admin');

// Add product
router.post(
	'/add-product',
	// isAuth,
	[
		body('name').isLength({ min: 5 }),
		body('imagesUrl').isURL(),
		body('price')
			.isNumeric()
			.isDecimal({ force_decimal: false, decimal_digits: '1,' }),
	],
	adminController.postProduct
);

module.exports = router;
