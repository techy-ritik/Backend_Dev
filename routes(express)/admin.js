const express=require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in the add-product middleware");
  res.send(
    '<form action="/admin/add-product" method="POST">Product Name:-<input type="text" name="productName">Product Size:-<input type"number" name="productSize"><button type="submit">Submit</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log("in the product middleware");
  console.log(req.body);
  res.redirect("/shop");
});


module.exports=router;