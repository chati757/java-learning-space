//normal function
var greet = function(name,massage){
    return massage + name
}

//arrow function (no 'function')
var arrowGreet = (name,message) => message + name

console.log(greet('testname','testmassage'))
console.log(arrowGreet('testname','testmassage'))

//---------------------------object function structure--------------------------------
var person = {
    name: 'Luna',
    handleMessage:function(message,handler){
        handler(message)
    },
    greet_problem:function(){
        var _this = this
        this.handleMessage('Hi ',function(message){
            console.log(message+_this.name)
        })
    },
    greet_resolve:function(){
        this.handleMessage('Hi ',(message => console.log(message+this.name)))
    }
    
}

person.greet_problem()
person.greet_resolve()
