const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productId: String,
  quantity:Number,
});

module.exports = mongoose.model("cart", CartSchema);
