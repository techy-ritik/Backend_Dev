const { json } = require("body-parser");
const fs = require("fs");

const path = require("path");

// const products = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
const getSavedProducts = (cb) => {
  
  fs.readFile(p, (err, productData) => {
    if (err) {
      cb([]);
    }
    //   console.log(JSON.parse(productData));
    else{
    cb(JSON.parse(productData));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // // products.push(this);
    // //   console.log("product array logged",products[0].title);
    getSavedProducts((products)=>{
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
    });
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );

    // // fs.readFile(p, (err, productData) => {
    // //   let products = [];
    // //   if (err) {
    // //     console.log(err);
    // //   } else {
    // //     products = JSON.parse(productData);
    // //     products.push(this);
    // //   }

    // //   fs.writeFile(p, JSON.stringify(products), (err) => {
    // //     console.log(err);
    // //   });
    // // });
    // // const lastAddedProduct=products[products.length-1].title;

    // fs.readFile("productList","utf-8",(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     let allProduct=data+lastAddedProduct + "\n";

    //     fs.writeFile("productList", allProduct, (err) => {
    //       console.log(err);
    //     });
    // })
  }

  static fetchAll(cb) {
    getSavedProducts(cb);
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    // fs.readFile(p, (err, productData) => {
    //   if (err) {
    //     cb([]);
    //   }
    //   //   console.log(JSON.parse(productData));
    //   cb(JSON.parse(productData));
    // });
    // // return products;
  }
};
