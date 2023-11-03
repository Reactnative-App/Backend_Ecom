/** @format */

const ProductModel = require('../models/productModel');
const PostModel = require('../models/postModel');
const CartModel = require('../models/cartModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


//for single file 
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/my-uploads');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
	},
});

module.exports.upload = multer({ storage: storage });

//for multiple file uploads
const uploadd = multer({
	storage: storage,
	// limits: { fileSize: 20  1024  1024 }, // 10MB
	fileFilter: (req, file, cb) => {
		cb(null, true);
	},
});

module.exports.fileUploadMultiple = uploadd.fields([
	{ name: 'image', maxCount: 5 },
	// { name: 'penCardImage', maxCount: 1 },
]);


// PRODUCTS   //
// for add product
module.exports.addProduct = async (req, res, next) => {
	console.log(req.file);
	const full_data = {
		img: 'http://localhost:2000' + req.file.path.split('public')[1],
		...req.body,
	};
	const AddProduct = await new ProductModel(full_data).save();

	res.status(200).json({ data: AddProduct, message: 'Register Successfully' });
};


// for get all product
module.exports.getAllProduct = async (req, res, next) => {
	const getProductList = await ProductModel.ProductTable.find().populate();
	res
		.status(200)
		.json({ data: getProductList, message: 'Product list get Successfully' });
};
//for get product by id
module.exports.getProduct = async (req, res, next) => {
	const getProductList = await ProductModel.ProductTable.findOne({
		id: req.params.id,
	});
	const productImages = await ProductModel.ProductImageTable.findOne({
		productId: req.params.id,
	});
	console.log(productImages, 'productImages', req.params.id);
	res
		.status(200)
		.json({
			data: { data: getProductList, images: productImages },
			message: 'Product get Successfully',
		});
};


// PRODUCT IMAGES//

module.exports.addProfileImages = async (req, res, next) => {
	const data = await ProductModel.ProductImageTable.findOne({
		id: req.body.productId,
	});
	// console.log(req.body.productId,'idddd',Data['img'])
	let images = [];
	let AddProductImage;
	let full_data = {};
	if (data?.img?.length) {
		console.log('if', data['img']);
		let newarr = [...data['img']];
		for (let i = 0; i < req.files.image.length; i++) {
			images.push(
				'http://localhost:2000/public/my-uploads/' + req.files.image[i].filename
			);
		}
		let obj = { [req.body.productColor]: images };
		newarr.push(obj);
		full_data = {
			img: newarr,
			...req.body,
		};
    
		AddProductImage = await ProductModel.ProductImageTable.findOneAndUpdate(
			{ id: req.body.productId },
			full_data
		);
		res
			.status(200)
			.json({ data: AddProductImage, message: 'Image Add Successfully' });
		return;
	} else {
		console.log('else');
		for (let i = 0; i < req.files.image.length; i++) {
			images.push(
				'http://localhost:2000/public/my-uploads/' + req.files.image[i].filename
			);
		}
		let obj = { [req.body.productColor]: images };
		full_data = {
			img: obj,
			...req.body,
		};

		AddProductImage = await new ProductModel.ProductImageTable(
			full_data
		).save();
		res
			.status(200)
			.json({ data: AddProductImage, message: 'Image Add Successfully' });
	}
};

