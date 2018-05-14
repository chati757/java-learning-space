//insert new array

//--------------------concat------------------------------
const array2 = [{num:1},{num:2},{num:3}]
const array3 = [4,5,6]
const con_array1 = array2.concat(array3)
console.log(con_array1)
const con_array2 = con_array1.concat([9])
console.log(con_array2)
console.log(array2) //not like a push command becase array2 it's not change to [1,2,3,4,5,6]
//--------------------------------------------------------
//---------------------slice------------------------------
const arr = [{fruit:'banana'},{fruit:'apple'},{fruit:'mango'}]
console.log("slice")
console.log(...arr)//banana apple mango
const newArr = [
    ...arr.slice(0,1),//banana
    'strawberry',
    ...arr.slice(1)//appple,mango
]
console.log(newArr) //['banana','strawberry','apple','mango']
console.log(arr) //is not change ['banana','apple','mango']
//--------------------------------------------------------
//----------------------map-------------------------------
const arr2 = [{num:2},{num:3},{num:4},{num:5},{num:6},{num:2},{num:4},{num:3}]
const multiply2_func = e => ({num:e.num*2})
const multiply2_func2 = function(e){
    console.log(e.num)
    return {num:e.num}
}
const arr2_map = arr2.map(multiply2_func)
console.log("map")
console.log(arr2_map) //[ { num: 4 },{ num: 6 },{ num: 8 },{ num: 10 },{ num: 12 },{ num: 4 },{ num: 8 },{ num: 6 } ]
//--------------------------------------------------------
//--------------------filter------------------------------
const arr2_filter = arr2.filter(e=>e.num<4)
console.log("filter")
console.log(arr2_filter) //[ { num: 2 }, { num: 3 }, { num: 2 }, { num: 3 } ]
//--------------------------------------------------------
//--------------------reduce------------------------------
console.log("reduce")
const object_array2 = [
    {id:1,name:'kaprao',cal:1000},
    {id:2,name:'radna',cal:1100},
    {id:3,name:'soup',cal:700},
    {id:4,name:'fired chicken',cal:1200},
    {id:5,name:'kaprao',cal:1001}
]
//ret = return
//e = element
//{} = start at
//order = return
const sum2 = object_array2.reduce((order,e)=>{
    console.log(order,e)
    if(e.name in order){
        console.log("inif")
        order[e.name]++
    }else{
        console.log("inelse")
        order[e.name]=1
    }
    return order
},{}) //<---set start to object
console.log(sum2)
//--------------------------------------------------------
//---------------indexOf and findIndex--------------------
const c = [
    {name:'luna'},
    {name:'keira'}
]
console.log("test get value:",c[0].name) //luna
//const index1 = c.indexOf({name:'luna'}) //error 
//console.log(index)
const index3 = c.find(e=>e.name==='luna') //resolve
console.log("find")
console.log(index3)
const index4 = c.findIndex(e=>e.name==='keira') //resolve
console.log("findIndex")
console.log(index4)
//-------------------every and some-----------------------
const obj_array = [
    {id:1,name:'fox',color:'orange',type:'dog'},
    {id:2,name:'wolf',color:'white',type:'dog'}
]

const checker3 = obj_array.every(e=>e.type==='dog')
console.log(checker3) //false