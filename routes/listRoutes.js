const express = require("express");
const {getAllList,createList,updateList,deleteList} = require("../controllers/listController");
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
router.use(cookieParser());

router
  .route("/")
  .get(getAllList)
  .post(createList)

module.experts = router;