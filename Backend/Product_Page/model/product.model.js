const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  images: {
    type: [String],       // Array of image URLs
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  gender:{
    type:String,
    enum:["men" , "women" , "unisex"]
  },
  category: {
    type: String
  },
  price: {
    type: Number           // Price should be a number, not string
  }
}, { timestamps: true });

const Product= mongoose.model("Product", productSchema);
module.exports = Product
