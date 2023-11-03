const RegisterAdmin = require("../models/authModel");
module.exports.register = async (req, res, next) => {
  console.log(req.body);
  const RegisterAdminData = await new RegisterAdmin(req.body).save();
  console.log(RegisterAdminData);
  // res.send("user register")
  res
    .status(200)
    .json({ data: RegisterAdminData, message: "Register Successfully" });
};
module.exports.login = async (req, res, next) => {
  const UserDetails = await RegisterAdmin.findOne({ email: req.body.email });
  console.log(req.body, UserDetails, "req");
  let loggedIn = false;

  if (
    UserDetails != null &&
    UserDetails.email == req.body.email &&
    UserDetails.pass == req.body.password
  ) {
    loggedIn = true;
    // obj = { ..., loggedIn: true };
    res.status(200).json({
      data: UserDetails,
      loggedIn,
      message: "Login Successfully",
    });
  }
  res.status(201).json(obj);
};
