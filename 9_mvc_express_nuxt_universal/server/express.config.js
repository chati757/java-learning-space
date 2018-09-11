const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

const { Nuxt, Builder } = require('nuxt')
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

module.exports = async function(){
    const app = express()
    // use cookie
    app.use(cookieSession({
        name:'session',//named this is easy to change express-session in future
        keys:['fox','kuugen','987asd94zc9as7d9']
        //maxAge: 24 * 60 * 60 * 1000 // 24 hours //set in middleware instread (req.seesionOptions.maxAge = 60000 (1hour))
    }))

    /*
    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }else{
        app.use(compression);
    }
    */

    /*
    app.use(express.static('./public'));
    */

    app.use(bodyParser.urlencoded({
        extended:true //false -> support string and array only , ture -> support more..
    }));
    app.use(bodyParser.json())//json avaliable

    // express routes
    /*
    console.log('create route')
    var testing = function(req,res){
        console.log('intesting')
        res.json({ message: 'hello' })
    }
    app.use('/test', testing)
    */
    require('./routes/index.routes')(app)

    /*
    app.set('views','./app/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine','html');
    */
    // Give nuxt middleware to express
    // Import and Set Nuxt.js options

    // Init Nuxt.js
    const nuxt = new Nuxt(config)
    if (config.dev) {
        console.log('live build')
        const builder = new Builder(nuxt)
        await builder.build()
    }
    app.use(nuxt.render)

    app.listen(port, host)
    console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console

    return app;
}