var express = require('express'); //middle ware like a connect module
var app = express();

var helloworld = function(req,res,next){
    res.send('hello world');
};

app.use('/',helloworld);

app.listen(3000);
console.log("server running at http://localhost:3000");

module.exports = app; //for reuse (ex.usein app.js)