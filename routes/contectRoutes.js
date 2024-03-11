const express = require("express");
const {getAllContacts, createContact, getContact, updateContact, deleteContact, addContactForm} = require("../controllers/contactController.js");
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin.js")
const router = express.Router();
router.use(cookieParser());


router.route("/").get(checkLogin, getAllContacts);

router
  .route("/add")
  .get(checkLogin, addContactForm)
  .post(checkLogin, createContact);

router
  .route("/:id")
  .get(checkLogin, getContact)
  .put(checkLogin, updateContact)
  .delete(checkLogin, deleteContact);

module.exports = router;