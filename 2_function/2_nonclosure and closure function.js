//-------------------closure template function--------------------
function parant(){
    //----------------closure---------------
    var x = 1;
    //--------------------------------------
    function child(){
        console.log(x);
    }

    child();
}
parant(); //use non closure and call function
//output : 1
//* x is dead

//-------------------closure template function--------------------
function parant2(){
    //----------------closure---------------
    var x = 1;
    //--------------------------------------
    function child2(){
        console.log(x);
    }
    return child2;
}

var child2fn = parant2(); //use closure
child2fn(); //call function
//output : 1
//* x not dead