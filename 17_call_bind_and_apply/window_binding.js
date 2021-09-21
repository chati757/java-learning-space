let sayAge = function(){
    'use strict'; //for reject window obj and throw error
    console.log(this.age);
}

sayAge.call({age:35}); //allow this

//and not allow this
window.age = 36;
sayAge();