


const mongoose =require("mongoose")
const profileSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId , ref:"User" , required:true},
    fullName:String,
    bio:String,
    imageUrl:String // cloudinary image url
})

const Profile = mongoose.model("Profile" , profileSchema) 
module.exports = Profile