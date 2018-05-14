//insert new array
const array1 = [1,2,3]
console.log(array1.join())
console.log(array1.join(','))
console.log(array1.join('-'))
console.log(array1.join('+'))
console.log(array1)
//--------------------concat------------------------------
const array2 = [1,2,3]
const array3 = [4,5,6]
const con_array1 = array2.concat(array3)
console.log(con_array1)
const con_array2 = con_array1.concat([9])
console.log(con_array2)
console.log(array2) //not like a push command becase array2 it's not change to [1,2,3,4,5,6]
//--------------------------------------------------------
//---------------------slice------------------------------
const arr = ['banana','apple','mango']
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
const arr2 = [2,3,4,5,6,2,4,3]
const multiply2_func = e => e*2

const arr2_map = arr2.map(multiply2_func)
console.log("map")
console.log(arr2_map) //[ 4, 6, 8, 10, 12 ,4 ,8 ,6]
//--------------------------------------------------------
//--------------------filter------------------------------
const arr2_filter = arr2.filter(e=>e<4)
console.log("filter")
console.log(arr2_filter) //[2,3,2,3]
//--------------------------------------------------------
//--------------------reduce------------------------------
//ret = return
//e = element
//0 = start at
console.log("reduce")
const arr2_reduce = arr2.reduce((ret,e,i)=>{
    console.log(ret,e,i)
    const sum = ret+e
    return sum
},0)
console.log(arr2_reduce) //29
const arr2_reduce2 = arr2.reduce((ret,e,i)=>{

},0)
//--------------------------------------------------------
//---------------indexOf and findIndex--------------------
const array4 = [1,4,8,10,8,11,12]
console.log("indexOf")
const index1 = array4.indexOf(8)
console.log(index1) //2
const index2 = array4.indexOf(7)
console.log(index2) //-1
console.log("find")
const found1 = array4.find(e => e % 4 ===0)//4
console.log(found1)
console.log("findIndex")
const found2 = array4.findIndex(e => e % 4 ===0)//1
console.log(found2)
//-------------------every and some-----------------------
const array5 = [-1,2,3,4,5,-8,5,-9]
const checker1 = array5.every(e=>e>0)
console.log("every")
console.log(checker1) //false it's mean every element of array > 0 ?,answer is false
const checker2 = array5.some(e=>e>0)
console.log("some")
console.log(checker2) //ture it's mean some element of array > 0 ?,answer is true