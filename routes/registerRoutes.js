const express = require("express");
const router = express.Router();
const {getRegister,registerUser} = require("../controllers/registerController")

router.route("/register").get(getRegister).post(registerUser)

module.exports = router;