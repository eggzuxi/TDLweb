const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const app = express();
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("./public"))
app.use(methodOverride("_method"))

const PORT = 3000;
dbConnect();

// app.get("/", function (req, res) {
//   res.json({ reqTime: req.requestTime, message: "Hello, Node" });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/login",require("./routes/loginRoutes"));
// app.use("/register",require("./routes/registerRoutes"));
app.use("/",require("./routes/loginRoutes"));
// app.use("/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening from http://localhost:${PORT}`);
});
