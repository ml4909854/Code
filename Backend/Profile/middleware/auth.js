

const jwt = require("jsonwebtoken")
const User = require("../model/user.model.js")
const auth = async(req , res , next)=>{
    try {
         const token = req.headers.authorization.split(" ")[1]
         if(!token){
            return res.status(401).json({message:"Access Denied."})
         }
          
         const decoded = jwt.verify(token , "masai")
         req.user = await User.findById(decoded.id)
         console.log(req.user)
         next()
    } catch (error) {
        return res.status(400).json({message:"Invalid token!"})
    }
}
module.exports = auth