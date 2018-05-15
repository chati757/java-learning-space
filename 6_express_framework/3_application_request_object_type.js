//send part or request part
var helloWorld = function(req,res,next){

//---------------------------request--------------------------

    //req.query //http://localhost/page1?key1=value1&key2=value2

    //req.params //http://localhost/page1/param1/param2 (routing parameter)

    //req.body //(use with body parser)(from parameter ex.input box etc..)

    //req.path //get current path of user request

    //req.host //hostname or url of user request

    //req.ip //get ip of user request

//-------------------------------------------------------------
//---------------------------response--------------------------

    //res.status(code) //http status code

    //res.set(field,[value]) //http response header

    //res.redirect([status],url) // redirect

    //res.send([body|status],[body])

    //res.json([body|status],[body]) //json view response

    //res.rander(view,[locals],callback) //view is html template ,locals is path of html template
    
//-------------------------------------------------------------

};