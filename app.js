const cors = require("cors"); //new
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();
app.use(cors()); // new

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

router.get("/api", function (req, res, next) {
    res.send({ title: "Express" });
  });

module.exports = app;
