

const jwt = require("jsonwebtoken")
const User = require("../model/user.model")
const auth = async(req , res , next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.status(401).json({message:"token not found!.You are an authorised."})
        }
        const decoded = jwt.verify(token , "masai")
        req.user = await User.findById(decoded._id)
        next()
    } catch (error) {
        return res.status(500).json({message:"Invalid or expired token!" , error:error.message})
    }
}

module.exports = auth