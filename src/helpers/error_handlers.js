module.exports = (fn)=>{
return function(req,res,next){
    fn(req,res,next).catch((error)=>{
        if(typeof err ==="string"){
            res.status(401).json({error:err});
        }else{
            next(err);
        }
    })
}
};