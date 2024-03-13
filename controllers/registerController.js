//@desc get register page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
// const jwt = require("jsonwebtoken");

//@desc get register
//@route GET /
const getRegister = (req,res) => {
  res.render("register");
};

//@desc Register User
//@route POST /
const registerUser = asyncHandler(async(req,res) => {
  const {name,email,password1,password2} = req.body;
  if(password1 === password2){
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({email, password:hashedPassword});
    res.status(201).json({message:"등록성공",user})
  }else{
    res.send("등록실패")
  }
});

module.exports = {getRegister,registerUser};