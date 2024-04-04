const path=require("path");

const rootDir = require("../helper(util)/path");


exports.getContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactUs = (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/success");
};