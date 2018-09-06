exports.test = function(req,res){
    console.log('stored data')
    res.status(200).json({message:"success!"})
}
//next is goto next middle