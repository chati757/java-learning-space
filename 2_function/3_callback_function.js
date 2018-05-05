//closure advantage-->callback function

//closure template function
function prefix(pre){ //(pre)<---closure
    return function filehandler(err,data){
        console.log(pre+ " "+data);
    };
}

var say = prefix("Say:");//use closure
var shout = prefix("Shout:");//use closure
//use closure...

var fs = require('fs');
fs.readFile('hello.txt',say);//callback function
fs.readFile('hello.txt',shout);//callback function

//output : Say:helloworld

