

const express = require("express")
const router = express.Router()
const User = require("../model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


// register user

router.post("/register" , async(req , res)=>{
    try {
        const {email , password} = req.body
        
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User are alerady exists! try different username"})
        }

        // hash password
        const hashpassword = await bcrypt.hash(password , 10)
        
        const newUser = new User({email , password:hashpassword})
        const savedUser = await newUser.save()
        res.status(201).json({message:"user register successfully!" , user:savedUser})
    } catch (error) {
        res.status(500).json({message:"Error to register user!" , error:error})
    }
})

/// login router

router.post("/login" , async(req , res)=>{
    try {
        const {email , password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User not found!, Please register first."})
        }
        const comaprePassword = await bcrypt.compare(password , user.password)
        if(!comaprePassword){
            return res.status(400).json({message:"Incorrect password!"})
        }
        
        let token  = jwt.sign({_id:user._id} ,process.env.JWT , {expiresIn:"2d"})

      res.status(200).json({message:"Login successful!" , token})
    } catch (error) {
        return res.status(500).json({message:"login error!" , error:error})
    }
})

module.exports  = router
