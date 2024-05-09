const mysql=require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sharpNode",
  password: "ritikesh1113",
});

module.exports=pool.promise();