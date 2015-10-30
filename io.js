var fs = require('fs')
path = process.argv[2]
buff = fs.readFileSync(path)
string = buff.toString()
array = string.split('\n')
count = array.length - 1

console.log(count)
