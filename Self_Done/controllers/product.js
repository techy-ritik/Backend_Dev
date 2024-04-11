const path = require("path");
const fs = require("fs");

const rootDir = require("../helper(util)/path");

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // console.log("in the product middleware");
  // console.log(req.body);

  res.redirect("/shop");
};

exports.getShowProducts = (req, res, next) => {
  Product.fetchAll((products)=>{
      // console.log("getShowProducts data", products);
      
      let allProd="";
      for(let prod of products){
        allProd+=prod.title + "\n";
      }
      console.log(allProd)

      const shopHtml = fs.readFileSync(path.join(rootDir, "views", "shop.html"),"utf8");
      res.send(shopHtml+allProd);

      // res.sendFile(path.join(rootDir, "views", "shop.html"));
  });
};