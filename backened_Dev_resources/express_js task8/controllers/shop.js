const Product = require("../models/product");
const Cart = require("../models/cart");
const { where } = require("sequelize");
const CartItem = require("../models/cartItem");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // Product.fetchAll()
  //   .then(([rows, filedData]) => {
  //     console.log(rows);
  //     // res.render("shop/product-list", {
  //     //   prods: rows,
  //     //   pageTitle: "All Products",
  //     //   path: "/products",
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findById(prodId)
  //   .then(([product]) => {
  //     console.log(product);
  //     res.render("shop/product-detail", {
  //       product: product[0],
  //       pageTitle: product.title,
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  Product.findByPk(prodId)
    .then((product) => {
      console.log(product);
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // Product.findAll({ where: { id: prodId } })
  //   .then((products) => {
  //     res.render("shop/product-detail", {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // Product.fetchAll()
  //   .then(([rows, filedData]) => {
  //     console.log(rows);
  //     // console.log(filedData);
  //     // res.render("shop/index", {
  //     //   prods: rows,
  //     //   pageTitle: "Shop",
  //     //   path: "/",
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      // console.log(cart);
      return cart
        .getProducts()
        .then((products) => {
          res.render("shop/cart", {
            path: "/cart",
            pageTitle: "Your Cart",
            products: products,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  // Cart.getCart((cart) => {
  //   Product.fetchAll((products) => {
  //     const cartProducts = [];
  //     for (product of products) {
  //       const cartProductData = cart.products.find(
  //         (prod) => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     }
  //     res.render("shop/cart", {
  //       path: "/cart",
  //       pageTitle: "Your Cart",
  //       products: cartProducts,
  //     });
  //   });
  // });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let product;
  let newQuantity = 1;
  // Product.findById(prodId, (product) => {
  //   Cart.addProduct(prodId, product.price);
  // });

  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      // let product;
      // console.log("products is this :-", products);
      if (products.length > 0) {
        product = products[0];
      }
      // let newQuantity = 1;
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }

      return Product.findByPk(prodId);
    })
    .then((data) => {
      return fetchedCart.addProduct(data, {
        through: { quantity: newQuantity },
      });
    })
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/cart");
};

exports.postDeleteCartItems = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      // console.log("product data returned by first then", products[0]);
      // const product=products[0];
      // product.cartItem.destroy({where:{productId:prodId}});
      CartItem.destroy({where:{productId:prodId}});
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
