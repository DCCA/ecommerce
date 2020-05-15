const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		imagesUrl: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		quadro: {
			type: String,
		},
		engrenagens: {
			type: String,
		},
		aro: {
			type: String,
		},
		guidao: {
			type: String,
		},
		pneu: {
			type: String,
		},
		haste: {
			type: String,
		},
		pedaleira: {
			type: String,
		},
		freios: {
			type: String,
		},
		corrente: {
			type: String,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Product', productSchema);
