module.exports = function(app){
    console.log('index route running')
    const gotest = require('../controllers/index.controllers.js')
    app.get('/users',gotest.test)

    app.get('/req/apikey',gotest.getapi)

    app.get('/check/apikey',gotest.checkapi)

    app.get('/req/cookie',gotest.getcookie)

    app.get('/req/obj',gotest.getobj)
    app.post('/req/obj',gotest.postobj)
    app.put('/req/obj/:data',gotest.putobj)
    app.delete('/req/obj/:data',gotest.deleteobj)

    console.log('out from set route')
}
