
require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const userRouter = require("./controller/user.controller")
const profileRouter = require("./controller/profile.controller")
const app = express()
app.use(express.json())


// router connected 

app.use("/user" , (userRouter))
app.use("/profile" , (profileRouter))

app.get("/" , ()=>{
    console.log("connected!")
})

app.use((req , res)=>{
    res.send("path not found!")
})


app.listen(3000 , async()=>{
await connectDB()
console.log("server is running")
})