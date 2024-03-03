const http = require("http");
const routs = require('./routs');

console.log(routs.text);
const server = http.createServer(routs.handler);

server.listen(4000);