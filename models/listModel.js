const mongoose = requie("mongoose");

const listSchema = new mongoose.Schema(
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
const List = mongoose.model("List",listSchema);
module.exports = List;