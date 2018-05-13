//Promise = future block
const a = 'a'

const ap = new Promise((resolve,reject)=>{
    setTimeout(()=>{ //<--async function
        resolve('a') 
        reject('b')//b not show because it's not error
    },3000) //with 3 second
})
console.log("do other thing")
console.log("call normal variable:",a) //call normal variable
console.log("call Promise block:",ap) //Promise block

//then it's will be receive resolve_value and reject_value in Promise
ap
.then(e=>{
    console.log(e)
    return `my value is: ${e}` 
})
.then(e=>{
    console.log("resolve:",e)
})
.catch(e=>{ //handle error form callback
    console.log("reject:",e)
})

//-----------------------------------------------------------
//resolve
/*
//callback function    (not wait this function when using)
function loadNews(callback){
    setTimeout(()=>{
        callback([
            {id:1,title:'a'},
            {id:2,title:'b'},
            {id:3,title:'c'},
            {id:4,title:'d'}
        ])
    },1000)
}//non-block
console.log('do other thing');
//use callback function
loadNews(function(result){
    //validateNews(result,function(news){
        //sortByLatest(news,function(lastest){ //problem callback in hell
            //console.log("final")
        //})
    //})
})
*/
function loadNews(){
    const result = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve([
                {id:1,title:'a'},
                {id:2,title:'b'},
                {id:3,title:'c'},
                {id:4,title:'d'}
            ])
        },4000)
    })
    return result
}

//chain function
function validateNews(result){
    console.log("validateNews:",result)
    return result
}

const loadNews_data = loadNews() //then use with variable only
    .then(validateNews)
    .then(e=>{
        console.log("last result:",e)
    })

//------------------(new feature) async and await-------------------------
//not use then
console.log('(new feature) async and await')
async function run(){
    const news = await loadNews()
    return news
}
run()
    .then(e=>{
        console.log("inrun",e)
    })
//------------------minimize promise------------------------
const box = Promise.resolve('a')//goto box and final
box
    .then(e=>{
        console.log('box',e)
    })
    .catch(e=>console.log('box:incatch'))
    .then(e=>console.log('box:final'))

const box2 = Promise.reject('a')//goto incatch and final
box2
    .then(e=>{
        console.log('box2:',e)
        throw 'error'
    })//skip all then before catch
    .catch(e=>console.log("box2:incatch"))
    .then(e=>console.log('box2:final'))

const box3 = Promise.reject('a')//goto in handle error and final
box3
    .then(e=>{
        console.log('box3:',e)
        throw 'error'
    },e=>{//handle error in the seem level only
        console.log('box3:in handle error')
    })
    .catch(e=>console.log('box3:incatch'))
    .then(e=>console.log('box3:final'))

const box4 = Promise.resolve('a')//goto incatch because error same lavel not goto (in handle error)
box4
    .then(e=>{
        console.log('box4:',e)
        throw 'error'
    },e=>{//handle error in the seem level only
        console.log('box4:in handle error')
    })
    .catch(e=>console.log("box4:incatch"))
    .then(e=>console.log('box4:final'))