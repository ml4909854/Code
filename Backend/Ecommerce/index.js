

const express = require("express")
const connectDB = require("./config/db")
const userRouter = require("./controller/user.controller.js")
const productRouter = require("./controller/product.controller.js")
const cartRouter = require("./controller/cart.controller.js")
const orderRouter = require("./controller/order.controller.js")
const adminRouter = require("./controller/admin.controller.js")
const reviewRouter = require("./controller/review.controller.js")
const app = express()

app.use(express.json())

app.use("/user" , userRouter)
app.use("/product" , productRouter)
app.use("/cart" , cartRouter)
app.use("/order" , orderRouter)
app.use("/admin" , adminRouter)
app.use("/review" , reviewRouter)

app.get("/" , (req  , res)=>{
    res.send("connnected!")
})

app.use((req , res)=>{
    res.send("Path not found!")
})

app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running port:3000")
})