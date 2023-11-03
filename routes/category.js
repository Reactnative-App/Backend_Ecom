const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
// router.post(
//   "/add-category",
//   productControler.upload.single("img"),
//   productControler.addProduct
// );
router.post("/add-category", categoriesController.addCategory);
router.post("/add-sub-category", categoriesController.addSubCategory);
router.get("/get-product/:id", categoriesController.getproductByCategoryID);
router.get("/get-product-by-subcategory/:id", categoriesController.getproductBySubCategoryID);

// router.post("/add-post", productControler.addPost);
// router.post("/get-cart", productControler.getCartData);
// router.get("/get-product", productControler.getProduct);
// router.get("/get-all-product", productControler.getAllProduct);
// router.get("/get-post", productControler.getPost);
module.exports = router;