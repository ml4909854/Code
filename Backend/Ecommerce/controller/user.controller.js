


const express = require("express")
const User = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()

// register

router.post("/register" , async(req , res)=>{
    try {
        const {name , email, password} = req.body

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exists. Try different email."})
        }

        const hashedPassword = await bcrypt.hash(password , 3)
        const newUser = new User({
           name , email , password:hashedPassword
        })
        const savedUser = await newUser.save()
        return res.status(201).json({message:`${savedUser.name} registered successfully!` , user:savedUser})
    } catch (error) {
        return res.status(500).json({message:"error to saved a user" , error:error.message})
    }
})

router.post("/login" , async(req , res)=>{
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Please register first."})
        }

        const comparePassword = await bcrypt.compare(password , user.password)

        if(!comparePassword){
            return res.status(400).json({message:"password is wrong."})
        }

        const token = jwt.sign({_id:user._id} , "masai" , {expiresIn:"1d"})
        return res.status(201).json({message:`${user.name} logged successfully!` , token , userId:user._id})
    } catch (error) {
        return res.status(500).json({message:"error to saved a user" , error:error.message})
    }
})

module.exports = router