const express = require("express");
/* Controllers */
const {getMainPage} = require("../controllers/contactController");
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
router.use(cookieParser());


router
.route("/").get(checkLogin,getMainPage);

// router.route("/add").get(checkLogin,addContactForm).post(checkLogin,createContact);

// router
// .route("/:id")
// .get(getContact)
// .put(updateContact)
// .delete(deleteContact);

module.exports = router;
