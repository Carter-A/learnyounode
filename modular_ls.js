var mymodule = require('./mymodule.js')

var name = process.argv[2]
var ext = process.argv[3]

mymodule(name, ext, function(err, list){
  for(i = 0; i < list.length; i++)
    console.log(list[i]);
})
