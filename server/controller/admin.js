const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

// Import model
const Product = require('../model/product');
const User = require('../model/user');

exports.postProduct = async (req, res, next) => {
	// req.userId = '5ebc3cfd649ca8665385313f';
	const name = req.body.name;
	const imagesUrl = req.body.imagesUrl;
	const price = req.body.price;
	const description = req.body.description;
	const quadro = req.body.quadro;
	const engrenagens = req.body.engrenagens;
	const aro = req.body.aro;
	const guidao = req.body.guidao;
	const pneu = req.body.pneu;
	const haste = req.body.haste;
	const pedaleira = req.body.pedaleira;
	const freios = req.body.freios;
	const corrente = req.body.corrente;
	const product = new Product({
		name: name,
		imagesUrl: imagesUrl,
		price: price,
		description: description,
		creator: '5ebd94ebe8003393049c17c7',
		quadro: quadro,
		engrenagens: engrenagens,
		aro: aro,
		guidao: guidao,
		pneu: pneu,
		haste: haste,
		pedaleira: pedaleira,
		freios: freios,
		corrente: corrente,
	});
	try {
		await product.save();
		const user = await User.findById('5ebd94ebe8003393049c17c7');
		creator = user;
		console.log(user.products);
		user.products.push(product);
		await user.save();
		res.status(201).json('product created');
	} catch (err) {
		console.log(err);
		err.statusCode = 500;
		next(err);
	}
};
