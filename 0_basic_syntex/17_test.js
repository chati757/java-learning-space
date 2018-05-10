array1 = [1,2,4,5,6]

object_array1 = [
    {name:"test1"},
    {name:"test2"},
    {name:"test3"}
]

object_array2 = [
    {name:"test4"},
    {name:"test5"},
    {name:"test6"}
]

const con_array1 = object_array1.concat(object_array2)
console.log("concat",con_array1)
console.log("original",object_array1)