const array = [1,4,8,10,8,11,12]

const index1 = array.indexOf(8)
console.log(index1) //2
const index2 = array.indexOf(7)
console.log(index2) //-1

const found1 = array.find(e => e % 4 ===0)//4
console.log(found1)
const found2 = array.findIndex(e => e % 4 ===0)//1
console.log(found2)
//----------------------object array------------------------------
const c = [
    {name:'luna'},
    {name:'keira'}
]

console.log("test get value",c[0].name) //luna
//const index1 = c.indexOf({name:'luna'}) //error 
//console.log(index)
const index3 = c.find(e=>e.name==='luna') //resolve
console.log(index3)
const index4 = c.findIndex(e=>e.name==='keira') //resolve
console.log(index4)
