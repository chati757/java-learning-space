var http = require('http');

http.createServer(function(require,response){
    response.writeHead(200,{
        'Content-Type' : 'text/plain'
    });
    response.end('Hello World');
}).listen(3000);

console.log('Server running at port 3000 > http://localhost:3000')