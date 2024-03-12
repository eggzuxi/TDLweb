//@desc Get Login Page
const asyncHandler = require("express-async-handler");
const User = require("../models/useModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//@route GET / 
const getLogin = (req,res) => {
  res.render("main");
}

//@desc Login User
//@route POST /
const loginUser = asyncHandler(async(req,res)=> {
  // console.log(req.body);
  const {username,password} = req.body;
  const user = await User.findOne({username})
  if(!user){
    return res.status(401).json({message:"일치하는 사용자가 없습니다."})
  }
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.status(401).json({message:"비밀번호가 일치하지 않습니다."})
  }
  const token = jwt.sign({id:user._id},jwtSecret)
  res.cookie("token",token,{httpOnly:true})
  res.redirect("/contacts")
  // if (username === "admin" && password === "1234"){
  //   res.send("로그인 성공")
  // }else {
  //   res.send("로그인 실패")
  // }
});
//@desc get register page
//@route GET /register
const getRegister = (req,res) => {
  res.render("register");
};

//@desc Register User
//@route POST /register
const registerUser = asyncHandler(async(req,res) => {
  const {username,password,password2} = req.body;
  if(password === password2){
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({username, password:hashedPassword});
    res.status(201).json({message:"등록성공",user})
  }else{
    res.send("register failed")
  }
});
const logout = (req,res) => {
  res.clearCookie("token");
  res.redirect('/')
}
module.exports = {getLogin,loginUser,getRegister,registerUser,logout};