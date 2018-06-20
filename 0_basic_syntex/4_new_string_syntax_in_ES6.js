//use backticks
const multi = `test
bar
barbar`

console.log(multi.replace(/\n/,''))

const multi2 = "test\
test\
test"

console.log(multi2.replace(/\n/,''))

//-----------------------------------------------------------------

const name = 'bob'
const time = 'today'
const greet1 = "Hello ${name},how are you ${time} ?"
const greet2 = `Hello ${name + 'o'},how are you ${time} ?`

console.log(greet1)
console.log(greet2) //ES6
