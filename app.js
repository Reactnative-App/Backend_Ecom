const express = require("express");
require("dotenv").config();
require("./helpers/mongoDbInit");
var bodyParser = require("body-parser");
const auth = require("./routes/auth");
const product = require("./routes/product");
const category = require("./routes/category");
const cart = require("./routes/cart");

const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static("public/my-uploads"));
app.use(express.static(__dirname + "/images"));
// app.use(express.static(path.join(__dirname, 'public/my-uploads')));

app.use(cors());
app.post("/register-admin", (req, res, next) => {
  res.send("User Register");
});
app.use("/auth", auth);
app.use("/product", product);
app.use("/category", category);
app.use("/cart", cart);

app.listen(2000, () => {
  console.log("server is running on 2000 port");
});
