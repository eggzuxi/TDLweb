const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title :{
      type:String,
      require:true,
    },
    body :{
      type:String,
      require:true,
    },
  }
);
const Todo = mongoose.model("todo",todoSchema);
module.exports = Todo;