const array = [10,20,30]

//ret = return
//e = element
//i = loop count
const reduce = array.reduce((ret,e,i) => {
    console.log(i,ret,e)
    const sum = ret + e
    return sum
},0)

console.log(reduce)

//----------------------------------------------------

const object_array2 = [
    {id:1,name:'kaprao',cal:1000},
    {id:2,name:'radna',cal:1100},
    {id:3,name:'soup',cal:700},
    {id:4,name:'fired chicken',cal:1200},
    {id:5,name:'kaprao',cal:1001}
]

//order = return
//e = element
const sum2 = object_array2.reduce((order,e)=>{
    console.log(order,e)
    if(e.name in order){
        console.log("inif")
        order[e.name]++
    }else{
        console.log("inelse")
        order[e.name]=1
    }
    return order
},{}) //<---set start to object
console.log(sum2)