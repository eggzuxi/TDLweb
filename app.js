const express = require("express");
const dbConnect = require("./config/dbConnect")
const app = express();
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views", "./views");
app.use(express.static("./public"));
app.use(methodOverride("_method"));

const port = 3000;
dbConnect();

// app.get("/", (req, res)=>{
//   res.send('nonogram');
// });

// json 방식 명시?
app.use(express.json());
app.use(express.urlencoded({extended:true})); // query string은 얘가 처리함(ASCII code)
app.use("/", require("./routes/loginRoutes"))
app.use("/contacts", require("./routes/contectRoutes"));


app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버 실행중`)
});