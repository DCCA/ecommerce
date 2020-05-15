const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop');

router.get('/products', shopController.getProducts);

router.get('/product/:id', shopController.getProduct);

module.exports = router;
