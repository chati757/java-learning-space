const uuidAPIKey = require('uuid-apikey');

exports.test = function(req,res){
    console.log('stored data express mvc middleware')
    res.status(200).json({message:"success!"})
}

exports.getapi = (req,res)=>{
    console.log('getapi express mvc middleware')
    res.json(uuidAPIKey.create())
}

exports.checkapi = (req,res)=>{
    //incase query string : req.query.apikey
    console.log('checkapi express mvc middleware ',req.query.apikey)
    res.json({message:"ok"})
}
//next is goto next middle