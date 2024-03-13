const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    email:{
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