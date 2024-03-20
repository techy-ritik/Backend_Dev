const http = require("http");
const bodyParser = require("body-parser");
const path=require('path');

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const exp = require("constants");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use('/',(req, res, next) => {
  // res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname,"views", "pageNotFound.html"));
});

// const routs = require('./routs');

// console.log(routs.text);
// const server = http.createServer(routs.handler);

// const server = http.createServer(app);

// server.listen(4000);

app.listen(3000);
