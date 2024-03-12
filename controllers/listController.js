const asyncHandler = require("express-async-handler");
const List = require("../model/listModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JW_SECRET


const getAllList = asyncHandler(async(req,res)=>{
  const Lists = await List.find();
  res.render("todo",{})
});

const createList = asyncHandler(async(req,res)=>{
  const {title,body} = req.body;
  console.log(req.body)
  if(!title||!body){
    return res.status(400).send("필수값입력안함")
  }
  const contact = await List.create({title,body});
  res.status(201).send("리스트 추가");
});

const updateList = asyncHandler(async(req,res)=>{
  const id= req.params.id;
  const {title,body}= req.body;
  const contact = await Contact.findById(id);
  contact.title = title
  contact.body = body
  contact.save()
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

const deleteList = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const contact = await List.findByIdAndDelete(id);
  res.status(200).send(`Delete Contact for Id:${req.params.id}`);
});

module.exports = {getAllList,createList,updateList,deleteList};