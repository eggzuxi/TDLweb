//@desc Get Login Page
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//@desc get login
//@route GET /login
const getLogin = (req,res) => {
  res.render("login");
}

//@desc Login User
//@route POST /login
const loginUser = (req,res)=> {
  const {Email, password} = req.body;
  const user = User.findOne({Email})
  if (!Email || !password) {
    return res.status(400).send("이메일 또는 비밀번호를 입력해주세요.");
  }
  if (Email === "Email" && password === "password") {
    req.session.Email = Email;
    return res.render("todo");
  }
  res.send("이메일 또는 비밀번호를 다시 확인하세요.");
  res.redirect("login")
};

//@desc Login User
//@route POST /
// const loginUser = (req,res)=> {
//   console.log(req.body);
//   const {Email,password} = req.body;
//   const user = User.findOne({Email})
//   if(!user){
//     return res.status(401).send("일치하는 사용자가 없습니다.");
//   }
//   const isMatch = bcrypt.compare(password,user.password);
//   if(!isMatch){
//     return res.status(401).send("비밀번호가 일치하지 않습니다.")
//   }
//   res.redirect("todo")
// };

// app.get("/dashboard", function(req, res) {
//   const Email = req.session.Email;
//   if (!Email) {
//     return res.status(401).send("Unauthorized");
//   }
  
//   res.render("dashboard", { Email }); // Render dashboard.ejs with Email passed as data
// });

//@desc Logout
//@route ? /
// const logout = (req,res) => {
//   res.clearCookie("token");
//   res.redirect('/')
// }

module.exports = {getLogin,loginUser};
// logout
