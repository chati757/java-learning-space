const array1 = [1,2,3]
console.log(array1.join())
console.log(array1.join(','))
console.log(array1.join('-'))
console.log(array1.join('+'))

//--------------------------------------------------------
const array2 = [1,2,3]
const array3 = [4,5,6]
const con_array1 = array2.concat(array3)
console.log(con_array1)
const con_array2 = con_array1.concat([9])
console.log(con_array2)
console.log(array2) //not like a push command becase array2 it's not change to [1,2,3,4,5,6]
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


