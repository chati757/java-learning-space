const array = ['one','two','three']

console.log("loop for")
for (var i = 0;i < array.length;i++){
    console.log(array[i])
}

console.log("forEach type")
array.forEach(e=>{
    console.log(e)
})

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