var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();
    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }else{
        app.use(compression);
    }

    app.use(bodyParser.urlencoded({
        extended:true //false -> support string and array only , ture -> support more..
    }));
    app.use(bodyParser.json());//json avaliable

    app.set('views','./app/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine','html');

    require('../app/routes/index.routes')(app); //call module.exports = function(app) in index.routes.js
    
    app.use(express.static('./public'));

    return app;
}