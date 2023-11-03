const CategorySchema = require("../models/categories");
const SubCategorySchema = require("../models/subCategory");const multer = require("multer");
const productModel = require("../models/productModel");



module.exports.addCategory = async (req, res, next) => {
  const AddCategory = await new CategorySchema(req.body).save();
  res
    .status(200)
    .json({ data: AddCategory, message: "CategorySchema Data added Successfully" });
};
module.exports.addSubCategory = async (req, res, next) => {
  const AddCategorySchema = await new SubCategorySchema(req.body).save();
  res
    .status(200)
    .json({ data: AddCategorySchema, message: "SubCategorySchema Data added Successfully" });
};

module.exports.getproductByCategoryID = async (req, res, next) => {
  const AddCategorySchema = await  productModel.find({"category":req.params.id});
  res
    .status(200)
    .json({ data: AddCategorySchema, message: "SubCategorySchema Data added Successfully" });
};

module.exports.getproductBySubCategoryID = async (req, res, next) => {
  const AddCategorySchema = await  productModel.find({"sub-category":req.params.id}).populate(["Category","SubCategory"]);
  res
    .status(200)
    .json({ data: AddCategorySchema, message: "SubCategorySchema Data added Successfully" });
};
