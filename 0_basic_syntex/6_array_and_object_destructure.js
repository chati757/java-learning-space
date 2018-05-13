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

const f1 = person.first
const l1 = person.last
console.log(f1,l1)

const {first:f2,last:l2} = person
console.log(f2,l2)

//destructure object from function
console.log("destructure object from function")
function createUser(){
    return {name:'Luna',age:2}
}

const {name:a3,age:b3} = createUser()
console.log(a3,b3)
