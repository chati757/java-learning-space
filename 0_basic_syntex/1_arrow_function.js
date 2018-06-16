//normal function
var greet = function(name,massage){
    return massage + name
}

//arrow function (no 'function')
var arrowGreet = (name,message) => message + name

console.log(greet('testname','testmassage'))
console.log(arrowGreet('testname','testmassage'))

console.log('arrow function (non parameter type)')
var non_para = () => {
    console.log('hello non parameter')
}
console.log(non_para())

//---------------------------object function structure--------------------------------
var person = {
    name: 'Luna',                      //callback function
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

console.log("problem")
person.greet_problem()
console.log("resolve")
person.greet_resolve()
