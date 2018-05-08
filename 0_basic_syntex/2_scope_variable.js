//var
//let
//const

var name = "Luna"
if(true){
    var name = "Ken"
}

//first in first out like FIFO
console.log(name) // is Ken because var name is global variable it's get last variable defined (problem)

let name2 = "Luna"
if(true){
    let name2 = "Ken"
}
//first value only
console.log(name2) // is Luna because let is define luna first and luna not change to ken (resolve)

//----------------------------------------------------------
var stack =[]
for (var i=0;i<10;i++){
    stack.push(function(){
        console.log(i)
    })
}

stack.forEach(function(f){
    f()
})
//(problem : 10 , 10time)

var stack =[]
for (let i=0;i<10;i++){
    stack.push(function(){
        console.log(i)
    })
}

stack.forEach(function(f){
    f()
})
//(resolve : 0-9)

//const vs let : const cannot reassign
const person = {}
person.name ='testname'

console.log(person)
console.log(person.name) //not error it's not reassign but this is add properies

//in the present var is obsolete
//use let and const instead var is better