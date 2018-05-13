const array = ['one','two','three']

//work but old
console.log("loop for")
for (var i = 0;i < array.length;i++){
    console.log(array[i])
}

//suitable for change non-mutate array (create new array)
console.log("forEach type")
array.forEach(e=>{
    console.log(e)
})
const array2 = [2,3,4]
const result = [] //<----side effect problem
array2.forEach(e => {
    const a = e * 2
    result.push(a)
})
console.log("result of forloop change:",result)
//resolve side effect result2 not change forever
const result2 = array.map(e=>{
    const a=e*2
    return a
})
console.log("result of map (side effect resolve) change:",result)
console.log("for of")
//for of can break loop before finish [that is a new feature]
for (const v of array){
    console.log(v)
    //can not break
}

console.log("for of and break")
for (const v of array){
    console.log(v)
    if(v==='two'){
        break;
    }
    //2loop not 3loop ['one','two']
}

console.log("for of and continue")
for (const v of array){
    if(v==='two'){
        continue;
    }
    console.log(v)
    //2loop not 3loop ['one','three']
}