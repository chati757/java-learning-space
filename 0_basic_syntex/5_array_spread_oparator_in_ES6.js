//spread operator
const arr = [4,5,6]
const append = [1,2,3,arr] //(problem) arr is sub array
const append2 = [1,2,3,...arr] //(resolve) use spread operator (non sub array)

console.log(append)
console.log(append2)

const origin_arr = [1,2,3]
const copy_arr = origin_arr
copy_arr.push(4) //origin_arr have change already [1,2,3,4]
console.log(copy_arr)
const copy_arr2 = [...origin_arr]
console.log(copy_arr2)
console.log(origin_arr)//[1,2,3,4] const and not definde again but can be change Ex.add or decrease

//---------------------------------------------------------------
//rest parameter
function howManyArgs(...args){
    console.log(args.length)
}

howManyArgs()
howManyArgs(4,2)
howManyArgs(3,8,6,7,5)

//map array function
const testmaparr = [-100,-200,-300]
function testfunc(x){
    console.log(x);
}
console.log(testmaparr.map(testfunc)) //link a forEach
console.log(testmaparr.map(Math.abs))

//map array in rest parameter function
function multiply(mutillier,...array){
    console.log(array)
    return array.map(e=>mutillier * e)
}

console.log(multiply(2,100,200,300))