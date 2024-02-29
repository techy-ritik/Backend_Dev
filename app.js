const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

// function rqListener(req,res){

// };
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  const url = req.url;
  const method = req.method;


  if (url === "/") {
    fs.readFile("message.text", 'utf8' , (err, data) => {
      if (err) {
        console.log(err);
      }
      // res.setHeader("Content-Type", "text/html");
      // console.log("data" , data);
      res.write("<html>");
      res.write("<head><title>my response</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
    });
  }
   else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>my response</title></head>");
  // res.write("<body><h1>Ritikesh Kumar</h1></body>");
  // res.write("</html>");
  // res.end();
  // process.exit();
});

server.listen(4000);