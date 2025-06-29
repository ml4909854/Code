


const express = require("express")
const Product = require("../model/product.model")
const auth = require("../middleware/auth.middleware")
const checkRole = require("../middleware/checkRole.middleware")
const router = express.Router()

// Get product

router.get("/" ,auth , checkRole("admin") , async(req , res)=>{
    try {
        const product = await Product.find()
        if(!product && product.length===0){
            return res.status(404).json({message:"No product found!"})
        }
        res.status(200).json({message:"product get successfully." , product:product})
    } catch (error) {
        res.status(500).json({message:"error to get a product" , error:error.message})
    }
})

// get a single product

router.get("/:id" ,auth , checkRole("admin") , async(req , res)=>{
    try {
        const productId = req.params.id
        const product = await Product.findById(productId).populate("reviews")
        if(!product){
            return res.status(404).json({message:"Product not found!"})
        }
        res.status(200).json({message:"product get successfully." , product:product})
    } catch (error) {
        res.status(500).json({message:"error to get  signle product" , error:error.message})
    }
})

// create product.
router.post("/create" ,auth , checkRole("admin") , async(req , res)=>{
    try {
        const{name , price} = req.body

        const newProduct = new Product({
            name, price
        })
        const savedProduct = await newProduct.save()
        res.status(201).json({message:"product saved successfully!"  , product:savedProduct})
    } catch (error) {
        res.status(500).json({message:"error to get  signle product" , error:error.message})
    }
})

// update a product
router.patch("/update/:id" ,auth , checkRole("admin") , async(req , res)=>{
    try {
        
        const productId = req.params.id
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({message:"Product not found!"})
        }

        const updateProduct = await Product.findByIdAndUpdate(productId , req.body , {new:true})
        res.status(200).json({message:"Product updated successfully!" , product:updateProduct})
    } catch (error) {
        res.status(500).json({message:"error to get  signle product" , error:error.message})
    }
})

// delete product
router.delete("/delete/:id" ,auth , checkRole("admin") , async(req , res)=>{
    try {
        
        const productId = req.params.id
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({message:"Product not found!"})
        }

        const deleteProduct = await Product.findByIdAndDelete(productId)
        res.status(200).json({message:"Product Deleted successfully!" , product:deleteProduct})
    } catch (error) {
        res.status(500).json({message:"error to get  signle product" , error:error.message})
    }
})



module.exports = router