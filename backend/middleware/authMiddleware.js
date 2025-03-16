const jwt= require("jsonwebtoken")

//middleware for token verification 
// req.user-> decoded
const authenticate= (req,res,next)=>{
    const token= req.headers.authorization && req.headers.authorization.split(" ")[1]
    if(!token)
    {
       return res.status(400).json({
         error: "no token"
        })
    }  
    try{
    const decoded= jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        return res.json({
            error:"user does not exist"
        })

    }
    req.user= decoded
    next()
    }catch(err){
    return res.status(401).json({
        error:"bad gateway"
    })
    }

}

const authorizeRoles= (allowedRoles=[])=>(req,res,next)=>{
if(!req.user&& !req.user.role){
    return res.status(403).json({
        error:"forbidden"
    })
}
if(!allowedRoles.includes(req.user.role)){
    return res.json({
        error:"unauthorized"
    })
}
next()

}

module.exports={authenticate, authorizeRoles}

