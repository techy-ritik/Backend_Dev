const express=require('express');

const router=express.Router();

router.get("/", (req, res, next) => {
  console.log("in the / middleware");
  res.send("<h1>welcome to expresss js</h1>");
});

module.exports=router;