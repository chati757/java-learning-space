//-------------------------function---------------------------
function test1(mood='hello'){
    //not use mood
    return mood
}

console.log(test1())

//--------------------------array-----------------------------
//destructure
let [x1,y1] = [1,2]

console.log(x1,y1) //1 2

let [x2=3,y2=4] = [1,]

console.log(x2,y2) //1 4

//--------------------------object----------------------------
//destructure
//set 4 is default of age
const {age1:x3=4,name1:y3} = {name1:'luna'}

console.log(x3,y3)

const {age2:x4=2,name2:y4='nana'} = {}

console.log(x4,y4)

const [{prop:x5=3}] = [{prop:undefined}] //find destructure if prop is undefined search default value (3)

console.log(x5)

const [{prop:x6=3}] = [{}] //find destructure if prop is undefined search default value (3)

console.log(x6)

//const [{prop:x7=3}] = [] //find destructure and not find destructure ,x7 not 3 and error

//console.log(x7)

const [{prop:x8=3}={}] = [] //find destructure and not find destructure ,x8 not 3 and error

console.log(x8)

//------------------default function object-----------------------

function create_user1(person){
    const name = person.name || 'nana'
    const age = person.age || 2
    return `${name} (age:${age})`
}
console.log(create_user1({age:10,name:'Lucy'}))
console.log(create_user1()) //error
console.log(create_user1({})) //no error

function create_user2({age=2,name='Nana'}={}){
    return `${name} (age:${age})`
}
console.log(create_user2({age:20,name:'bob'}))
console.log(create_user2()) //resolve error
console.log(create_user2({})) //resolve error

create_user3 =({age=2,name='Nana'}={}) => `${name} (age:${age})`
console.log(create_user3({age:20,name:'bob'}))
console.log(create_user3()) //resolve error
console.log(create_user3({})) //resolve error

//-----------------------------------------------------------------