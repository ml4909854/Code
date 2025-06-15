
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const userRouter = require("./controller/user.controller")
const app = express()



app.use(cors())
app.use(express.json())

app.use("/user" , userRouter)

app.use("/" , (req , res)=>{
    res.send("connected!")
})

app.use((req , res)=>{
  return res.send("Path not found!")
})

app.listen(process.env.PORT ,async ()=>{
    await connectDB()
    console.log(`server is running ${process.env.PORT}`)
})