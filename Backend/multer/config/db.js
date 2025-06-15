

const mongoose = require("mongoose")
const mongourl = process.env.MONGOURL

const connectDB = async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log("db connected!")
    } catch (error) {
        console.log("db error!")
    }
}
module.exports = connectDB
