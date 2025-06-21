const express = require("express");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router();

// register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .json({ message: "User already exits, Try different email" });
    }
    // hash password

    const hashPassword = await bcrypt.hash(password , 4)
    
    const newUser = new User({email , password:hashPassword})
    const savedUser = await newUser.save()
    return res.status(201).json({message:"user register successfully!" , user:savedUser})

  } catch (error) {
    return res.status(500).json({message:"error to register user!" , error:error.message})
  }
});

// login page

router.post("/login" , async(req , res)=>{
    try {
        const {email , password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(404).send("User not found!,Please register firs")
        }

        const comparePassword = await bcrypt.compare(password , user.password)
        if(!comparePassword){
            return res.status(400).json({message:"Incorrect password!"})
        }

        const token = jwt.sign({_id:user._id} , "token" , {expiresIn:"1d"})

        return res.status(200).json({message:"Logged succesfully!" , token})
    } catch (error) {
        res.status(500).json({message:"login error!"})
    }
})

module.exports = router;
