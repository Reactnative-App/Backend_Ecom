const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  desc: String,
  price: Number,
  imgColor: Array,
  rating:Number,
  discount:Number,
  totalQuantity:Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: false
  },

});


const ProductImageSchema = new Schema({
  productId: String,
  // productColor:String,
  img: Array,

});

ProductTable = mongoose.model("product", ProductSchema);
ProductImageTable = mongoose.model("productImages", ProductImageSchema);
module.exports= {
  ProductTable,
  ProductImageTable
}
