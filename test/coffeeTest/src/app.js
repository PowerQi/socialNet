// Generated by CoffeeScript 1.7.1
var Application, http, ip, port, server;

http = require('http');

Application = require('./application');

port = process.env.PORT;

ip = process.env.IP;

server = http.createServer(function(req, res) {
  var app;
  console.log(Application);
  app = new Application(req, res);
  app.process();
});

server.listen(port, ip);

console.log("server running at http://" + ip + ":" + port);