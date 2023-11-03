const express = require("express");
const router = express.Router();
const authControler = require("../controllers/authController");
router.post("/register", authControler.register);
router.post("/login", authControler.login);
module.exports = router;
