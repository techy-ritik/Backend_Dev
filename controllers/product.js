const path=require("path");

const rootDir = require("../helper(util)/path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname,"..", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log("in the product middleware");
  console.log(req.body);
  res.redirect("/shop");
};

exports.getShowProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};