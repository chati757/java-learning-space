module.exports = function(app){
    console.log('index route running')
    var gotest = require('../controllers/index.controllers.js')
    app.get('/test',gotest.test)
    console.log('out from set route')
}
