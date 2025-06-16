


const express = require("express")
const connectDB = require("./db")
const userRouter = require("./controller/user.controller")
const app = express()

app.use(express.json())

app.use("/user" , (userRouter))

app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running!")
})