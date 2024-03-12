const express = require("express");
const router = express.Router();
const {getLogin,loginUser} = require("../controllers/loginController")
// logout 추가?

router.route("/").get(getLogin).post(loginUser)
// router.route("/logout").get(logout);

module.exports = router;