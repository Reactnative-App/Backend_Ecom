const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId:Number,
  profucts:[
    
  ]
});

module.exports = mongoose.model("cart", CartSchema);
