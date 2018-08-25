const array = [1,2,3]

const a1 = array[0]
const b1 = array[1]
console.log(a1,b1)

//destructure array
console.log("destructure array")
const [a2,b2] = array
console.log(a2,b2) //1 2
const [,,c2] = array
console.log(c2) //3
//destructure split array
console.log("destructure split array")
const [d2,...rest] = array
console.log(d2) //1
console.log(rest) //[2,3]
console.log("original array:",array)//not change

console.log("destructure object")
const person = {first:'Jane',last:'Doe'}
console.log(person)

const f1 = person.first
const l1 = person.last
console.log(f1,l1)

const {first,last} = person
console.log(first,last)

var a4,b4
var data = {a: 10, b: 20, c: 30, d: 40};
var data2 = {...data,e:90};
console.log(a4); // 10
console.log(b4); // 20
console.log("from data2",data2); // {c: 30, d: 40}


//destructure object from function
console.log("destructure object from function")
function createUser(){
    return {name:'Luna',age:2}
}

const {name:a3,age:b3} = createUser()
console.log(a3,b3)
