this lab is basic mvc structure (all file and folders in this lab is structure for mvc structure) and using ejs for templete engine
and learn abount how to config env variable (development version and production version)
structurefile of mvc
app :
    controller : form 1_mvc_structure.png 
    modules : form 1_mvc_structure.png
    routes : form 1_mvc_structure.png
    views : form 1_mvc_structure.png
config : 
    env : env variable folder
        dev : env variable folder(development stage) (debug log) (parse body)[middleware]
        production : env variable folder(production stage) (compression response) (parse body)[middleware]
    express.js : server engine (ex.express)
public : user can request with direct
    css : css folder
    img : img folder
    js : javascript folder
package.json : list module for npm install in firsttime when initalize project
server.js : call express.js and call mvc application

install module
    npm install

install packages in application
    add module name 3 module to package.json
        "morgan" : "1.9.0",
            "//":"HTTP request logger middleware for node.js",
        "compression" : "1.7.2",
            "//":"Node.js compression middleware.",
        "body-parser" : "1.18.2",
            "//":"Node.js body parsing middleware."
    run:
        npm update
    
install ejs template engine
    npm install ejs or add in package manager

to set env
    window ver.
        development version
            set NODE_ENV=development
        production version
            set NODE_ENV=production
    linux ver.
        development version
            export NODE_ENV=development
        production version
            export NODE_ENV=production

create mvc file structure
    ..\<project folder> $ create file server.js

    ..\<project folder> $ folder app
        ..\<project folder> $ folder controller
        ..\<project folder> $ folder models
        ..\<project folder> $ folder routers
        ..\<project folder> $ folder view

    ..\<project folder> $ folder config
        ..\<project folder> $ folder dev
        ..\<project folder> $ folder prodection
        ..\<project folder> $ file express.js
            import module
                const express = require('express');
                const morgan = require('morgan');
                const compression = require('compression');
                const bodyParser = require('body-parser');

            create application function
                const app = express()

            set env
                if(process.env.NODE_ENV === 'development') {
                app.use(morgan('dev'));
                }else{
                    app.use(compression);
                }

            set body-parser (for get datatype request from client Ex.req.body)
                app.use(bodyParser.urlencoded({
                    extended:true //false -> support string and array only , ture -> support more..
                }));

            set body-parser (json avaliable)
                app.use(bodyParser.json());//json avaliable

            set defult view render directory
                app.set('views','./app/views');
            
            set view ejs engine and type of view
                app.engine('html', require('ejs').renderFile);
                app.set('view engine','html'); //type of view

            set route for usr controller
                require('../app/routes/index.routes')(app);

            set public resource directoty for client
                app.use(express.static('./public'));
            
            return function (for server.js)
                return app;


    ..\<project folder> $ folder public (for future)

    ..\<project folder> $ file server.js
    
        set default env for start server
            process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //default env is 'development'

        import internal config (express.js)
            var express = require('./config/express');

        usring express
            var app = express()

        set application server for listen port 3000
            app.listen(3000);

        (optional for reuse server application)
            module.exports = app; //for reuse