const Product = require('../model/product');

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.find()
			.populate('creator')
			.sort({ createdAt: -1 });
		res.status(200).json({ products: products });
	} catch (err) {
		console.log(err);
		err.statusCode = 500;
		next(err);
	}
};

exports.getProduct = async (req, res, next) => {
	const prodId = req.params.id;
	try {
		const product = await Product.findById(prodId);
		res.status(200).json({
			product: product,
		});
	} catch (err) {
		console.log(err);
		err.statusCode = 500;
		next(err);
	}
};
