//@desc Get Login Page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
// const jwtSecret = process.env.JWT_SECRET;

//@route GET / 
const getLogin = (req,res) => {
  res.render("login");
}

//@desc Login User
//@route POST /
const loginUser = asyncHandler(async(req,res)=> {
  // console.log(req.body);
  const {email,password} = req.body;
  const user = await User.findOne({email})
  if(!user){
    return res.status(401).json({message:"일치하는 사용자가 없습니다."})
  }
  const isMatch = await bcrypt.compare(password,user.password1);
  if(!isMatch){
    return res.status(401).json({message:"비밀번호가 일치하지 않습니다."})
  }
  const token = jwt.sign({id:user.email},jwtSecret)
  res.cookie("token",token,{httpOnly:true})
  res.redirect("/contacts")
  // if (username === "admin" && password === "1234"){
  //   res.send("로그인 성공")
  // }else {
  //   res.send("로그인 실패")
  // }
});

//@desc Logout
//@route ? /
const logout = (req,res) => {
  res.clearCookie("token");
  res.redirect('/')
}
module.exports = {getLogin,loginUser,logout};
