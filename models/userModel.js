const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true, // 쉼표 미리 찍어놓는 이유: 뒤에 추가할 때 까먹을까봐
  },
  password:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);