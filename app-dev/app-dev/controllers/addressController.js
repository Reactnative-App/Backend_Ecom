const AddressModel = require("../models/addressModel");



module.exports.addAddress = async (req, res, next) => {
    const AddAddress = await new AddressModel(req.body).save();
    res
      .status(200)
      .json({ data: AddAddress, message: "Address Data added Successfully" });
  };
  
  module.exports.getAddressData = async (req, res, next) => {
    const AddressData = await AddressModel.find({ productId: req.params.id });
    res
      .status(200)
      .json({ data: AddressData, message: "Product list get Successfully" });
  };
  