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

install env application
    add module name 3 module to package.json
    "morgan" : "1.9.0",
        "//":"HTTP request logger middleware for node.js",
    "compression" : "1.7.2",
        "//":"Node.js compression middleware.",
    "body-parser" : "1.18.2",
        "//":"Node.js body parsing middleware."

    run:
        npm update

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


config applicaiton env(<project>/config/express.js)(<project>/server.js)
    
    express.js     
    server.js