const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// const errorHandler = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const app = express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("./public"))
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "your_secret_key", resave: true, saveUninitialized: true }));

const PORT = 3000;
dbConnect();

// app.get("/", function (req, res) {
//   res.json({ reqTime: req.requestTime, message: "Hello, Node" });
// });


app.get("/login", function(req, res) {
  res.render("login"); // "login.ejs" 파일을 렌더링하여 클라이언트에게 응답
});


app.post("/login", function(req, res) {
  const { Email, password } = req.body;
  if (!Email || !password) {
    return res.status(400).send("Email or password is missing in the request body");
  }
  
  if (Email === "user" && password === "password") {
    req.session.Email = Email;
    return res.redirect("/dashboard");
  }
  res.send("이메일 또는 비밀번호를 다시 확인하세요.");
});

app.get("/dashboard", function(req, res) {
  const Email = req.session.Email;
  if (!Email) {
    return res.status(401).send("Unauthorized");
  }
  
  res.render("dashboard", { Email }); // Render dashboard.ejs with Email passed as data
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login",require("./routes/loginRoutes"));
app.use("/register",require("./routes/registerRoutes"));

// app.use("/",require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));
app.use("/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening from http://localhost:${PORT}`);
});
