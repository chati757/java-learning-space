var connect = require('connect')
var app = connect()


//middleware
//next fot next middleware 
//* next and end have a related
let logger=function(req,res,next){
    console.log('req.method,req.url:',req.method,req.url)
    console.log('request:',req)
    console.log('ip address',req.ip)
    console.log('ip address',req.connection.remoteAddress)//work
    console.log('ip address',req.socket.remoteAddress)//work
    console.log('ip address',req.connection.socket)
    next()
}

let helloworld=function(req,res){
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
}

app.use(logger)
//next()-->app.use(helloworld)
app.use(helloworld)
//end

app.listen(3000)
console.log('Server running at http://localhost:3000')