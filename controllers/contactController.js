const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route Get /contacts
const getMainPage = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  // res.status(200).render("getAll",{heading:"User List", contacts:contacts});
  res.render("home",{contacts:contacts})
});

module.exports = {getMainPage};