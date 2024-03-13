//@desc get register page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
// const jwt = require("jsonwebtoken");

//@route GET /
const getRegister = (req,res) => {
  res.render("register");
};

//@desc Register User
//@route POST /
const registerUser = asyncHandler(async(req,res) => {
  const {name,Email,password} = req.body;
  const user = await User.create({name, Email, password});
  user.name = name
  user.Email = Email
  user.password = password
  user.save()
  res.status(200).send(`${name}님, 환영합니다.`)
});

module.exports = {getRegister,registerUser};