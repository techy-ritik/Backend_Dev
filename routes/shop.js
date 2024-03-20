const path=require('path');
const express=require('express');

const rootDir = require("../helper(util)/path");


const router=express.Router();


// router.get("/", (req, res, next) => {
//   console.log("in the / middleware");
//   res.send("<h1>welcome to expresss js</h1>");
// });

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
})


module.exports=router;