const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  name: String,
  type: String,
//   optional: String,

category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sategory',
    required: true
  },
});

module.exports = mongoose.model("subCategory", SubCategorySchema);
