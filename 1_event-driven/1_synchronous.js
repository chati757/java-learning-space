//import lib filesystem
var fs = require('fs');

var data = fs.readFileSync('hello.txt');

console.log(data.toString());
console.log('do other thing');

//output
    //hello world <--from txtfile
    //do other thing