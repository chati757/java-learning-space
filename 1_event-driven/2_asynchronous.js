//import lib filesystem
var fs = require('fs');

//callback function
fs.readFile('hello.txt',function(err,data){
    console.log(data.toString());
});

console.log('do other thing');

//output
    //do other thing
    //hello world <--from txtfile