//function variable var [f1]
var say = function myname(){
    console.log("myname");
}
say();

//function call another function [f1[xarg]] [f2]-->[f1(f2)]
function calltest(somefunction){
    somefunction();
}
calltest(say);

//return sub function [f1[f2]]-->var
function func1(){
    return function func2(){
        console.log("form func2")
    }
}

var namefn = func1();
namefn();
