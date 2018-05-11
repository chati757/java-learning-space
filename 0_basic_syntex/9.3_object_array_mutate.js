//------------------pop and shift-------------------------
const object_array4 = [{name:'a'},{name:'b'},{name:'c'}]
console.log("pop and shift")
console.log(object_array4)
const pop_arr = object_array4.pop()
console.log("pop:",pop_arr)
const shift_arr = object_array4.shift()
console.log("shift:",shift_arr)
console.log("after:",object_array4)
//----------------push and unshift------------------------
console.log("push and unshift")
const object_array5 = [{val:'a'},{val:'v'},{val:'x'},{val:'t'}]
console.log(object_array5)
const unshift_test = object_array5.unshift({val:'r'})
console.log("unshift_test:",unshift_test)
const push_test = object_array5.push({val:'b'})
console.log("push:",push_test)
console.log("after:",object_array5)
//-----------------splice and slice-----------------------
console.log("splice and slice")
const mutate = [{color:'red'},{color:'green'},{color:'0'},{color:'1'},{color:'blue'}]
const splice_test = mutate.splice(2,2,{color:'white'},{color:'yellow'}) //delete element position start at positon 1 , 2 element
console.log("splice_test",splice_test)
//get element from array
const slice_test=mutate.slice(1,2) //1 is start position and 2 is end positon
console.log("slice_test:",slice_test) // create new array and push element selection from slice(1,2) postion
const slice_test2=mutate.slice() //<--like a copy array ['red','green','white','yellow','blue']
console.log("slice_test2:",slice_test2)
console.log("after:",mutate)