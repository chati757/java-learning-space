//ES6 module defines a default export
export default function(){ 
    console.log("hello export default") 
}

/*
    import foo from './0_declaration.js'
    foo()
*/

module.exports = function(){
    console.log('hello module exports')
}

/*
    var say = require('./0_declaration.js')
    say()
*/

exports.exportfunc = function(){
    console.log('say exportfunc')
}

/*
    var say = require('./0_declaration.js')
    say.exportfunc()
*/