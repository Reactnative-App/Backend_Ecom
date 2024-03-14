const CommonModel = require("../models/commonModel");



module.exports.addReviewAndRating = async (req, res, next) => {
  let ReviewAndRating = await new CommonModel.ReviewAndRatingProduct(req.body).save();
  res
    .status(201)
    .json({ data: ReviewAndRating, message: "Review Data added Successfully" });
};

module.exports.getReviewAndRating = async (req, res, next) => {
    let ReviewAndRating = await CommonModel.ReviewAndRatingProduct.findOne({
		id: req.params.id,
	});
    res
      .status(200)
      .json({ data: ReviewAndRating, message: "Review Data get Successfully" });
  };

