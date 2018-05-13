//------------------pop and shift-------------------------
const array4 = ['a','b','c']
console.log(array4)
const pop_arr = array4.pop()
console.log(pop_arr)
const shift_arr = array4.shift()
console.log(shift_arr)
console.log(array4)
//----------------push and unshift------------------------
const array5 = ['a','v','x','t']
console.log(array5)
const unshift_test = array5.unshift('r')
console.log(unshift_test)
console.log(array5)
const push_test = array5.push('b')
console.log(push_test)
console.log(array5)
//-----------------splice --------------------------------
const mutate = ['red','green','0','1','blue']
const splice_test = mutate.splice(2,2,'white','yellow') //delete element position start at positon 1 , 2 element
console.log(mutate) //['red','green','white','yellow','blue']