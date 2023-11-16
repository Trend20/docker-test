let path = require("path");
const express = require("express");
let fs = require("fs");

// let MongoClient = require("mongodb").MongoClient;

let bodyParser = require("body-parser");

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/profile-picture", function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));

  res.writeHead(200, { "Content-Type": "image/jpg" });

  res.end(img, "binary");
});
