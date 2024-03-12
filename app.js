const http = require("http");

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in the first middleware');
    next();  // Allows to move the request to the next middleware for continuing further code execution 
})


app.use((req, res, next) => {
  console.log("in the second middleware");
  res.send({ name: "Ritik" });
});

// const routs = require('./routs');

// console.log(routs.text);
// const server = http.createServer(routs.handler);


// const server = http.createServer(app);

// server.listen(4000);

app.listen(3000);