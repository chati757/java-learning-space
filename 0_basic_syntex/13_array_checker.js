const array = [-1,2,3,4,5,-8,5,-9]

const checker1 = array.every(e=>e>0)
console.log(checker1) //false it's mean every element of array > 0 ?,answer is false
const checker2 = array.some(e=>e>0)
console.log(checker2) //ture it's mean some element of array > 0 ?,answer is true

//----------------------object array------------------------------
const obj_array = [
    {id:1,name:'fox',color:'orange',type:'dog'},
    {id:2,name:'wolf',color:'white',type:'dog'}
]

const checker3 = obj_array.every(e=>e.type==='dog')
console.log(checker3) //false