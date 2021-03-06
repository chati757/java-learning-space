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

//------------------------------------------------------------
console.log("callback1")
//
//                 callback part
//                     |
//callback function    v (not wait this function when using)
function loadNews(callback){
    setTimeout(()=>{
        callback([
            {id:1,title:'a'},
            {id:2,title:'b'},
            {id:3,title:'c'},
            {id:4,title:'d'}
        ])
    },1000)
}//non-block
console.log('do other thing');
//use callback function
loadNews(function(result){
    console.log(result)
    //validateNews(result,function(news){
        //sortByLatest(news,function(lastest){ //problem callback in hell
            //console.log("final")
        //})
    //})
})

//------------------------------------------------------------
console.log("callback2")
function doSomethingOldStyle(successCallback, failureCallback) {
    console.log("in doSomethingOldStyle");
    // Succeed half of the time.
    if (Math.random() > .5) {
      successCallback("SUCCESS")
    } else {
      failureCallback("FAILURE")
    }
  }
  
  function successCallback(result) {
    console.log("It succeeded with " + result);
  }
  
  function failureCallback(error) {
    console.log("It failed with " + error);
  }
  
  doSomethingOldStyle(successCallback, failureCallback);