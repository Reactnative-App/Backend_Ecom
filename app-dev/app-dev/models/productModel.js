/** @format */

const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	productName: String,
	desc: String,
	imgColor: Array,
	rating: Number,
	discount: Number,

	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	subCategory: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SubCategory',
		required: false,
	},
//   productVarientsId: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'productVarients',
// 		required: true,
// 	},
//   productImagesId: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'productImages',
// 		required: true,
// 	},
});

const ProductImageSchema = new Schema({
	productId: String,
	// productSizes: Array,
  productColor:String,
	img: Array,

});
const ProductVarientSchema = new Schema({

  variants:Array,
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'product',
		required: true,
	},
});

ProductTable = mongoose.model('product', ProductSchema);
ProductImageTable = mongoose.model('productImages', ProductImageSchema);
ProductVarientTable = mongoose.model('productVarients', ProductVarientSchema);

module.exports = {
	ProductTable,
	ProductImageTable,
  ProductVarientTable
};
