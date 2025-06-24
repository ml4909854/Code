


const express = require("express")
const upload = require("../middleware/upload")
const Product = require("../model/product.model")
const router = express.Router()

// we have a field like related to the 
// name , category , deccription , imags , price

// Get all the product 

router.get("/" , async(req , res)=>{
    try {
        const product = await Product.find()
        if(!product){
            return res.status(404).json({message:"No product found!"})
        }
        return res.status(200).json({message:"Product get successfully!" , product:product})
    } catch (error) {
        res.status(500).json({message:"Error to get product!"})
    }
})

// create a product
router.post("/save" , upload.array("images" , 5) , async(req , res)=>{
    try {
        const {name , description , price , category , gender} = req.body
        const imageUrl = req.files.map(file=>file.path) // cloduinary urls

        const newProduct = new Product({
            name , description , price , category ,gender, images:imageUrl
        })
        const savedProduct = await newProduct.save()
        return res.status(201).json({message:"Product saved successfully!" , product:savedProduct})
    } catch (error) {
         res.status(500).json({message:"error to save product" , error:error.message})
    }
})

module.exports = router