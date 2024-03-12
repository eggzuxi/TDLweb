const express = require("express");
const {getAllTodo,createTodo,updateTodo,deleteTodo} = require("../controllers/todoController");
const cookieParser = require("cookie-parser");
const router = express.Router();
router.use(cookieParser());

router
  .route("/")
  .get(getAllTodo)
  .post(createTodo)
  .put(updateTodo)
  .delete(deleteTodo)

module.exports = router;