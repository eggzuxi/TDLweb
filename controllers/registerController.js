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
    const user = await User.create({name,email,password});
    res.status(201).send(`${user.name}님, 환영합니다.`)
});

module.exports = {getRegister,registerUser};