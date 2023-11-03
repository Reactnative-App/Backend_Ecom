const express = require("express");
const router = express.Router();
const productControler = require("../controllers/productControler");
// const productControler = require("../controllers/productControler");

router.post(
  "/add-product",
  productControler.upload.single("img"),
  productControler.addProduct
);
// router.post("/add-cart", productControler.addCart);
router.post("/add-product-image",
  productControler.fileUploadMultiple,
  productControler.addProfileImages
);

// router.post("/add-post", productControler.addPost);
// router.post("/get-cart", productControler.getCartData);
// router.get("/get-product", productControler.getProduct);
// router.get("/get-product/:id", productControler.ca);
router.get("/get-product/:id", productControler.getProduct);

router.get("/get-all-product", productControler.getAllProduct);
// router.get("/get-post", productControler.getPost);
module.exports = router;
