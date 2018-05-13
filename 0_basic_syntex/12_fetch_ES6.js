//npm install node-fetch
const url = 'https://jsonplaceholder.typicode.com/users'

//GET (default)
fetch(url)
    .then(e=>{ //e is reponse object
        if(! e.ok){ //because 404 error from network not work in catch it's must be add this condition
            throw 'error'
        }
        return e.json
    })
    .then(e=>{
        console.log(e)
    })
    .catch(e=>{
        console.log("error",e)
    })

//POST
fetch('/posts',{
    method:'POST',
    body:new FormData(from),//<--from is formdata in web template
    credentials:'same-origin'//'include' (default is not send cookie and ,so it's must be add credentials to same-origin)
    //in the seem server add 'same-origin' and other server add 'include' for create cookies
})

//POST JSON
fetch('/posts',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:'Hubot',
        login:'hubot'
    }),//<--from is ui in web template
    credentials:'same-origin'//'include' (default is not send cookie and ,so it's must be add credentials to same-origin)
    //in the seem server add 'same-origin' and other server add 'include' for create cookies
})