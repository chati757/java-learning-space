/*
type of nodejs module
    -core module (default module of nodejs)
    -file module (Ex.1_say_export.js , 1_say_module.js) in this lab
    -folder module 
        Ex.-Project
                |-main.js
                |-modules
                    |-action <-- 1
                        |-say.js <-- 3
                        |-package.json
                        {
                            "name" : "action",
                            "version" : "1.0.0",
                            "main" : "./say.js" <-- 2 
                        }
                        *if not find package.json next it's find index.js (if exits)
        *require folder module style
        var say = require('./modules/action');
    -third party module (npm)
*/

/*
    var require = function(){
        ....
        return module.export
    }
*/
var say1 = require('./1_say_export');

say1.sayhello();
say1.sayhi();

var say2 = require('./1_say_module');
say2();