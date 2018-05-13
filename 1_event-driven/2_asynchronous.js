//import lib filesystem
var fs = require('fs');
//callback function
//                              callback part
//                                  |
//                                  v (not wait this function when using)
fs.readFile('hello.txt',function(err,data){
    console.log(data.toString());
});//non-block

console.log('do other thing');

//output
    //do other thing
    //hello world <--from txtfile


