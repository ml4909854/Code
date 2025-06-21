// mongodb://localhost:27017

const mongoose = require("mongoose")
const mongoUrl = "mongodb://localhost:27017/profile"

const connectDB = async()=>{
    try {
        await mongoose.connect(mongoUrl)
        console.log("db connected!")
    } catch (error) {
        console.log("db connected error!")
    }
}

module.exports = connectDB