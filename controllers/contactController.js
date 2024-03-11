const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

// @desc Get all contacts
// @route Get /contacts

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  // console.log(typeof(contacts))
  // res.status(200).render("getAll", {heading:"User List", contacts:contacts});
  res.render("index", {contacts:contacts})
})

// @desc view add contact form
// @route Get /contacts/add

const addContactForm = (req, res) => {
  res.render("add")
}

// @desc Create a contact
// @route Post /contacts/add

const createContact = asyncHandler(async (req, res) => {
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    return res.status(400).send("필수값이 입력안됨")
  }
  const contact = await Contact.create({name, email, phone})
  // res.status(201).send("Create Contacts");
  res.redirect("/contacts")
})

// @desc Get contact
// @route Get /contact/:id

const getContact = asyncHandler(async(req, res)=>{
  const contact = await Contact.findById(req.params.id);
  // res.status(200).send(contact)
  res.render("update", {contact:contact}) // 키 : contact
})

// @desc Put a contact
// @route Put /contact/:id

const updateContact = asyncHandler(async(req, res)=>{
  const id = req.params.id;
  const {name, email, phone} = req.body;
  const contact = await Contact.findById(id) //findbyidupdate로 바꾸기
  if(!contact){
    res.status(404);
    throw new Error("연락처 없음");
  }
  contact.name = name
  contact.email = email
  contact.phone = phone
  contact.save()
  // res.status(200).send(`update:${req.params.id}`)})
  res.redirect("/contacts")
})

// @desc Delete a contact
// @route Delete /contact/:id

const deleteContact = asyncHandler(async(req, res)=>{
  const id = req.params.id
  const contact = await Contact.findByIdAndDelete(id)
  // res.status(200).send(`delete:${req.params.id}`)})
  res.redirect("/contacts")
})

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact, addContactForm}