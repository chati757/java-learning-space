const array = [10,20,30]

const result = array.filter(e=>e>10)
console.log(result) //[20,30]

const result2 = array.filter(e=>e!==20)
console.log(result2) //[10,30]

//------------------------------------------------
const object_array = [
    {id:1,name:'kaprao',cal:1000},
    {id:2,name:'salad',cal:500},
    {id:3,name:'soup',cal:700},
    {id:4,name:'fired chicken',cal:1200}
]

const isHealthy = (e => e.cal < 1000)
const result3 = object_array.filter(isHealthy)
console.log(result3) //object