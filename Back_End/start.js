var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '192.168.1.84');
console.log('Server running at http://127.0.0.1:1337/');
console.log("All the tests I run are useful")
console.log('')