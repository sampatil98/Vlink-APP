const jwt = require("jsonwebtoken")

function auth(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        if(token){
            var decoded = jwt.verify(token, 'accesstoken');
            if(decoded){
                req.body.userID = decoded.userID;
                next();
            }else{
                res.status(401).send({"msg":"Invalid User From Middleware auth "})
            }
        }else{
            res.status(401).send({"msg":"Please Login First "})
    
        }
    }catch(err){
        res.status(400).send({"msg":err});
    }
   
}

module.exports = {auth};

