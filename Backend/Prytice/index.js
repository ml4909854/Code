

const express = require("express")
const connectDB =  require("./config/db.js")
const userRouter = require("./controller/user.controller.js")
const profileRouter = require("./controller/profile.controller.js")
const app = express()
app.use(express.json())


//routes
app.use("/user" , userRouter)
app.use("/profile" , profileRouter)

app.get("/" , (req , res)=>{
    res.send("connected!")
})

app.use((req , res)=>{
    res.send("path not found")
})

app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running PORT:3000")
})