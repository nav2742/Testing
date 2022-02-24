const a = require('lodash')
var item = ["a",["b","c",["d"]]]

var b= a.flattenDeep(item)

console.log(b)