



const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId , ref:"User"},
    products:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId , ref:"Product"},
            quantity:{type:Number , min:1 , default:1}
        }
    ]

})

const Cart = mongoose.model("Cart" , cartSchema)
module.exports = Cart