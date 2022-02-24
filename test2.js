// const naga = require('./test')
// var c = naga.test('naveen')

// console.log(c)
 

// const a = 5;
// const b = 10;

// function addingvalues(){
//     console.log(`summation: ${a+b}`)
// }

// addingvalues();

var os = require('os')

console.log(os.userInfo()) 

var test = {
    name: os.type(),
    memory: os.totalmem(),
    freememory: os.freemem(),
    hostname: os.hostname()
}
console.log(test)
