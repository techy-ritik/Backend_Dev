const http = require("http");
const parsedBody = require("body-parser");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");

const cApp = express();

cApp.use(bodyParser.urlencoded({ extended: false }));

cApp.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/logedInUser" method="POST">Login id:-<input type="text" name="userName" id="username"><button type="submit">Login</button></form>'
  );
});

// allinputData="";

cApp.post("/logedInUser", (req, res, next) => {
  console.log("req.body", req.body);
  // const body = JSON.stringify(req.body);
  // allinputData = body.split('"')[3] + ":- ";
  // console.log(allinputData);
  // fs.readFile("inputData", "utf8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("inside readfile", data);

  //   allinputData=data+allinputData;
    
  // });


  // fs.writeFile("inputData", allinputData, (err) => {
  //   console.log(allinputData, "written in file");
  //   res.statusCode = 302;
  // });

  res.redirect("/");
});

cApp.get("/", (req, res, next) => {
  // console.log("inside / get middleware");

  fs.readFile("inputData", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    // console.log("inside readfile", data);

    res.send(
      `${data}
      <form 
        action="/" 
        onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
        method="POST">
        <input type="text" name="msgs">
        <input type="hidden" name="userName" id="username">
        <button type="submit">Send</button>
      </form>`
    );
  });

});

cApp.post("/", (req, res, next) => {
  // console.log("inside / post middleware");

  const sentMsgs = JSON.stringify(req.body);
  let mainSentMsgs = sentMsgs.split('"')[3]+".";
  let mainUserName = "\n"+sentMsgs.split('"')[7] + ":-";

  mainSentMsgs = mainUserName + mainSentMsgs;

  fs.readFile("inputData", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("inside post / readfile", data);

    mainSentMsgs=data+mainSentMsgs;
      console.log(mainSentMsgs);
      fs.writeFile("inputData", mainSentMsgs, (err) => {
        res.statusCode = 302;
      });
    
  });

  

  res.redirect("/");
});

cApp.listen(3000);