const uuidAPIKey = require('uuid-apikey');
let obj_testing_data = {
    a:'testa',
    b:'testb',
    c:'testc',
}

exports.test = function(req,res){
    console.log('stored data express mvc middleware')
    res.status(200).json({message:"success!"})
}

exports.getapi = (req,res)=>{
    console.log('getapi express mvc middleware')
    res.json(uuidAPIKey.create())
}

exports.getcookie = (req,res)=>{
    console.log('getcookie express mvc middleware')
    if(typeof req.session.test == 'undefined'){
        req.session.test = true
        req.sessionOptions.maxAge = 30000;
        res.json({
            message:"your received cookie 30 second",
            session:req.session.test
        })
    }
    else{
        res.json({message:"your have been cookie"})
    }
}

exports.getobj = (req,res)=>{
    console.log('getobj express mvc middleware')
    res.json(obj_testing_data)
}

exports.postobj = (req,res)=>{
    console.log('postobj express mvc middleware')
    res.json(obj_testing_data={...obj_testing_data,d:req.body.data})
}

exports.putobj = (req,res)=>{
    console.log('putobj express mvc middleware')
    obj_testing_data[req.params.data]=req.body.payload
    res.json(obj_testing_data)
}

exports.deleteobj = (req,res)=>{
    console.log('delete express mvc middleware')
    delete obj_testing_data[req.params.data]
    res.json(obj_testing_data)
}

exports.checkapi = (req,res)=>{
    //incase params : req.params.data
    //incase query string : req.query.apikey
    console.log('checkapi express mvc middleware ',req.query.apikey)
    res.json({message:"ok"})
}
//next is goto next middle