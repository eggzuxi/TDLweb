const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JW_SECRET


const getAllTodo = asyncHandler(async (req, res) => {
  const decoded = jwt.verify(req.cookies.token,jwtSecret)
  const userTodos = await Todo.find({ Email: decoded.Email});
  res.render("todo", { todo: userTodos });
});


const createTodo = asyncHandler(async(req,res)=>{
  const { title, body } = req.body;
  const Email = req.cookies.Email;
  const decoded = jwt.verify(req.cookies.token,jwtSecret)
  console.log(decoded);
  console.log(Email);
  if(!title||!body){
    return res.status(400).send("필수값입력안함")
  }
  const contact = await Todo.create({Email:decoded.Email,title:title,body:body});
  res.status(201).send("리스트 추가");
});

const updateTodo = asyncHandler(async(req,res)=>{
  const id= req.params.id;
  const {title, body} = req.body;
  const toDo = await Todo.findByIdAndUpdate(id,{
    title,
    body,
  });
  res.status(200).redirect("/todo");
});

const deleteTodo = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const toDo = await Todo.findByIdAndDelete(id);
  res.status(200).redirect("/todo");
});

module.exports = {getAllTodo,createTodo,updateTodo,deleteTodo};