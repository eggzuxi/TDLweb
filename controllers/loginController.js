//@desc Get Login Page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//@desc get login
//@route GET /
const getLogin = (req,res) => {
  res.render("login");
}

//@desc Login User
//@route POST /
// const loginUser = (req,res)=> {};

//@desc Login User
//@route POST /
const loginUser = asyncHandler(async(req,res)=> {
  console.log(req.body);
  const {Email,password} = req.body;
  const user = await User.findOne({Email})
  // console.log(user);
  if(!user){
    return res.status(401).send("일치하는 사용자가 없습니다.");
  }
  console.log(typeof(password), typeof(user.password))
  const isMatch = await bcrypt.compare(password,user.password);
  // console.log(user.Email, Email)
  if(!isMatch){
    return res.status(401).send("비밀번호가 일치하지 않습니다.")
  }
  const token = jwt.sign({Email:user.Email},jwtSecret);
  res.cookie("token",token,{httpOnly:true});
  const contacts = await Todo.find();
  res.render("todo",{todo:contacts});
});

//@desc Logout
//@route ? /
// const logout = (req,res) => {
//   res.clearCookie("token");
//   res.redirect('/')
// }

module.exports = {getLogin,loginUser};
// logout
