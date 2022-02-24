const a = require('lodash')
var item = ["a",["b","c",["d"]]]

var b= a.flattenDeep(item,2)

console.log(b)