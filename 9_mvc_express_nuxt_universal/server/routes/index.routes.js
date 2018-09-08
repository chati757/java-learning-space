module.exports = function(app){
    console.log('index route running')
    const gotest = require('../controllers/index.controllers.js')
    app.get('/users',gotest.test)

    app.get('/req/apikey',gotest.getapi)

    app.get('/check/apikey',gotest.checkapi)
    console.log('out from set route')
}
