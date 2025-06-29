


const checkRole = (requiredRole)=>{
    return (req , res , next)=>{
        if(requiredRole === !req.user.role){
            
            return res.status(403).json({message:"You are unauthorised. Only admin do it."})
        }
        next()
    }
}

module.exports = checkRole