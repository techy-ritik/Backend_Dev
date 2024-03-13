const http = require("http");
const bodyParser=require("body-parser");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
  console.log("in the add-product middleware");
  res.send('<form action="/product" method="POST">Product Name:-<input type="text" name="productName">Product Size:-<input type"number" name="productSize"><button type="submit">Submit</button></form>');
});

app.post("/product", (req, res, next) => {
  console.log("in the product middleware");
  console.log(req.body);
  res.redirect('/');
});

app.use("/", (req, res, next) => {
  console.log("in the / middleware");
  res.send("<h1>welcome to expresss js</h1>");
});

// const routs = require('./routs');

// console.log(routs.text);
// const server = http.createServer(routs.handler);

// const server = http.createServer(app);

// server.listen(4000);

app.listen(3000);
