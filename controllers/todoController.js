const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JW_SECRET


const getAllTodo = asyncHandler(async (req, res) => {
  const Email = req.cookies.Email;
  const userTodos = await Todo.findMany({ Email: Email});
  res.render("todo", { todo: userTodos });
});


const createTodo = asyncHandler(async(req,res)=>{
  const Email = req.cookies.Email;
  const {title,body} = req.body;
  console.log(req.body)
  if(!title||!body){
    return res.status(400).send("필수값입력안함")
  }
  const contact = await Todo.create({Email,title,body});
  res.status(201).send("리스트 추가");
});

const updateTodo = asyncHandler(async(req,res)=>{
  const id= req.params.id;
  const {title,body}= req.body;
  const contact = await Todo.findById(id);
  contact.title = title
  contact.body = body
  contact.save()
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

const deleteTodo = asyncHandler(async(req,res)=>{
  const title = req.params.title;
  const contact = await Todo.findByIdAndDelete(title);
  res.status(200).send(`Delete Contact for Id:${req.params.title}`);
});

module.exports = {getAllTodo,createTodo,updateTodo,deleteTodo};