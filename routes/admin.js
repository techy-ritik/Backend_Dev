const path = require("path");

const express = require("express");


const rootDir=require('../helper(util)/path')


const router = express.Router();

// router.get("/add-product", (req, res, next) => {
//   console.log("in the add-product middleware");
//   res.send(
//     '<form action="/admin/add-product" method="POST">Product Name:-<input type="text" name="productName">Product Size:-<input type"number" name="productSize"><button type="submit">Submit</button></form>'
//   );
// });

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("in the product middleware");
  console.log(req.body);
  res.redirect("/shop");
});

router.get("/contactus",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contactus.html'));
});

router.post('/contactus',(req,res,next)=>{
  console.log(req.body);
  res.redirect("/admin/success");
})

router.get("/success", (req, res, next) => {
  console.log("inside /success ");
  res.send("<h1 style=\"color:darkgreen;\">Form successfuly filled!</h1>");
});

module.exports = router;
