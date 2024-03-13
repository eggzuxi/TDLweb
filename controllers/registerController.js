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
  const {name,email,password} = req.body;
  const hashedPassword = await bcrypt.hash(password,10);
  const user = await User.create({name:name,Email:email,password:hashedPassword});
  res.status(201).send(`${user.name}님, 환영합니다.`)
});

module.exports = {getRegister,registerUser};