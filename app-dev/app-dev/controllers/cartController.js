
const CartModel = require("../models/cartModel");


module.exports.addCart = async (req, res, next) => {
    const AddCart = await new CartModel(req.body).save();
    res
      .status(200)
      .json({ data: AddCart, message: "Cart Data added Successfully" });
  };
  
  module.exports.getCartData = async (req, res, next) => {
    const cartData = await CartModel.find({ productId: req.params.id });
    res
      .status(200)
      .json({ data: cartData, message: "Product list get Successfully" });
  };
  