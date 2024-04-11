const path = require("path");

const express = require("express");


const rootDir=require('../helper(util)/path')

const productsController=require("../controllers/product")
const contactUsController=require("../controllers/contactUs");
const successController = require("../controllers/success");


const router = express.Router();

// router.get("/add-product", (req, res, next) => {
//   console.log("in the add-product middleware");
//   res.send(
//     '<form action="/admin/add-product" method="POST">Product Name:-<input type="text" name="productName">Product Size:-<input type"number" name="productSize"><button type="submit">Submit</button></form>'
//   );
// });

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

router.get("/contactus", contactUsController.getContactUs);

router.post('/contactus', contactUsController.postContactUs);

router.get("/success", successController.getSuccess);

module.exports = router;
