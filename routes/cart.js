const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add-cart", cartController.addCart);
router.get("/get-cart-product/:id", cartController.getCartData);
module.exports = router;
