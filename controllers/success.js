exports.getSuccess = (req, res, next) => {
  console.log("inside /success ");
  res.send('<h1 style="color:darkgreen;">Form successfuly filled!</h1>');
};