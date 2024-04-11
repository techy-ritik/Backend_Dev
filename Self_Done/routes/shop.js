const path=require('path');
const express=require('express');

// const rootDir = require("../helper(util)/path");
const productsController=require("../controllers/product")

const router=express.Router();


// router.get("/", (req, res, next) => {
//   console.log("in the / middleware");
//   res.send("<h1>welcome to expresss js</h1>");
// });

router.get('/', productsController.getShowProducts)


module.exports=router;