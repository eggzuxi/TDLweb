const express = require("express");
const {getAllList,createList,updateList,deleteList} = require("../controllers/listController");
const cookieParser = require("cookie-parser");
const router = express.Router();
router.use(cookieParser());

router
  .route("/")
  .get(getAllList)
  .post(createList)
  .put(updateList)
  .delete(deleteList)

module.experts = router;