const express = require("express");
const {getRegister,registerUser} = require("../controllers/registerController");
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
router.use(cookieParser());

router.route("/").get(getRegister).post(registerUser)

module.exports = router;