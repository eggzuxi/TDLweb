const express = require("express");
/* Controllers */
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm
} = require("../controllers/contactController");
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
router.use(cookieParser());


router
.route("/")
//모든 연락처 가져오기
.get(checkLogin,getAllContacts);


router
  .route("/add")
  .get(checkLogin,addContactForm)
  .post(checkLogin,createContact);

router
.route("/:id")
.get(getContact)
.put(updateContact)
.delete(deleteContact);

module.exports = router;
