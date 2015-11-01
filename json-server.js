var http = require('http');
var url = require('url');
var port = process.argv[2];

var route = {
  "/api/parsetime": function(parsedUrl){
    date = new Date(parsedUrl.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl){
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true);
  var resource = route[parsedUrl.pathname];
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});


JSON.stringify();

server.listen(port);
