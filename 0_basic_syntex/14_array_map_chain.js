//for resolve side effect
const array = [2,3,4,5,6]

const multiply2_func = e => e*2
const multiply10_func = e => e*10

const result=array
    .map(multiply2_func)
    .map(multiply10_func) //chain

console.log(array) //[2,3,4,5,6] array not change
console.log(result) //[40,60,80,100,120]
//------------------------------------------------------------
const array_object = [
    {name:'Luna'},
    {name:'Keira'}
]

const result2 = array_object.map(e=>e.name)
console.log(result2)
//--------------------------counting--------------------------
const array2 = ['banana','apple','mango']
const result3 = array2.map((e,i) => {
    return i
})
console.log(result3)
//------------------------------------------------------------
const object_array = [
    {id:1,name:'kaprao',cal:1000},
    {id:2,name:'radna',cal:1100},
    {id:3,name:'soup',cal:700},
    {id:4,name:'fired chicken',cal:1200}
]

const isNotHealthy = e => e.cal >= 1000

const sum = object_array
    .filter(isNotHealthy)
    .map(e => e.cal) //[1000,1400,1200]
    .reduce((ret,e) => ret + e,0)

console.log(sum) //3300