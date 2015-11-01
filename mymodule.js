var fs = require('fs');
var path = require('path');

module.exports = function(name, ext, callback) {
  var extention = '.' + ext;
  fs.readdir(name, function(err, list) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      list.forEach(function(input){
        if (path.extname(input) == extention) {
          result.push(input);
        }
      });
      callback(null, result)
    }
  });
};
