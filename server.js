// Server setup
const express = require("express");
const app = express();
const api = require("./server/routes/api");
const path = require("path");
const mongoose = require("mongoose");

//parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose setup
mongoose.connect("mongodb://localhost/favouritesDB", { useNewUrlParser: true });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use("/", api);

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});
