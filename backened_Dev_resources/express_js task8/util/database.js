// const mysql=require('mysql2');

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "sharpNode",
//   password: "ritikesh1113",
// });

// module.exports=pool.promise();

const { Sequelize } = require("sequelize");
const { AbstractDialect } = require("sequelize/lib/dialects/abstract/index");

const sequelize = new Sequelize("sharpnode", "root", "ritikesh1113", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
