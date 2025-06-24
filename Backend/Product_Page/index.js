

const express = require("express")
const connectDB = require("./config/db")
const productRouter = require("./controller/product.controller.js")
const cors = require("cors")
const app  = express()
app.use(cors())
app.use(express.json())


app.use("/product" ,productRouter)

// health route
app.get("/" , (req , res)=>{
    res.send("connected!")
})

// when path not found
app.use((req , res)=>{
    res.send("path not found!")
})

app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running PORT:3000")
})