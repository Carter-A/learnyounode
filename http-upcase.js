var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var upcase = map(function(chunk){
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function(request, response){
  if (request.method == 'POST'){
    request.pipe(upcase).pipe(response);
  }
});

server.listen(port);
