const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRoutes = require("./routes(express)/admin");
const shopRoutes = require("./routes(express)/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// const routs = require('./routs');

// console.log(routs.text);
// const server = http.createServer(routs.handler);

// const server = http.createServer(app);

// server.listen(4000);

app.listen(3000);
