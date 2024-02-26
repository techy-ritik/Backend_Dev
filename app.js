const http = require("http");

// function rqListener(req,res){

// };
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  const url= req.url;
  if (url === "/home"){
    res.write("<html>");
    res.write("<head><title>my response</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  }

  else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>my response</title></head>");
    res.write("<body><h1>Welcome to About Us Page</h1></body>");
    res.write("</html>");
    return res.end();
  } 

  else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>my response</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  } 
  
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my response</title></head>");
  res.write("<body><h1>Ritikesh Kumar</h1></body>");
  res.write("</html>");
  res.end();
  // process.exit();
});

server.listen(4000);
