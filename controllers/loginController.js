//@desc Get Login Page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JW_SECRET;


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
<<<<<<< HEAD
const loginUser = asyncHandler (async(req,res)=> {
  console.log("req바디임",req.body);
  const {Email,password} = req.body;

  const user = await User.findOne({Email})
  console.log(user);
  if(!user){
    return res.status(401).send("일치하는 사용자가 없습니다.");
  }
  const isMatch = await bcrypt.compare(password,user.password);
  console.log(password,user.password );
  console.log(`isMatch = ${isMatch}`);
=======
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
>>>>>>> b47f2c8f1d80bfb607b1bff4cd9b99d38fd4b22d
  if(!isMatch){
    return res.status(401).send("비밀번호가 일치하지 않습니다.")
  }
  const token = jwt.sign({Email:user.Email},jwtSecret);
  res.cookie("token",token,{httpOnly:true});
<<<<<<< HEAD
  res.redirect("/todo");
});

// app.get("/dashboard", function(req, res) {
//   const Email = req.session.Email;
//   if (!Email) {
//     return res.status(401).send("Unauthorized");
//   }
  
//   res.render("dashboard", { Email }); // Render dashboard.ejs with Email passed as data
// });
=======
  const contacts = await Todo.find();
  res.render("todo",{todo:contacts});
});
>>>>>>> b47f2c8f1d80bfb607b1bff4cd9b99d38fd4b22d

//@desc Logout
//@route ? /
// const logout = (req,res) => {
//   res.clearCookie("token");
//   res.redirect('/')
// }

module.exports = {getLogin,loginUser};
// logout
