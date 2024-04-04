const path = require("path");

const express = require("express");


const rootDir=require('../helper(util)/path')

const productsController=require("../controllers/product")
const productsController1=require("../controllers/contactUs");
const productsController2 = require("../controllers/success");


const router = express.Router();

// router.get("/add-product", (req, res, next) => {
//   console.log("in the add-product middleware");
//   res.send(
//     '<form action="/admin/add-product" method="POST">Product Name:-<input type="text" name="productName">Product Size:-<input type"number" name="productSize"><button type="submit">Submit</button></form>'
//   );
// });

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

router.get("/contactus", productsController1.getContactUs);

router.post('/contactus', productsController1.postContactUs);

router.get("/success", productsController2.getSuccess);

module.exports = router;
