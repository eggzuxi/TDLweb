const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    Email:{
      type:String,
      require:true
    },
    title :{
      type:String,
      require:true,
    },
    body :{
      type:String,
    },
  }
);
const Todo = mongoose.model("todo",todoSchema);
module.exports = Todo;