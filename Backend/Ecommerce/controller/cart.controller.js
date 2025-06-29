



const express = require("express")
const auth = require("../middleware/auth.middleware")
const Cart = require("../model/cart.model")
const e = require("express")
const router = express.Router()

// we have need four things 
// 1 . add to cart
// 2 . update cart
// 3.. remove cart
// 4. render cart

// add to cart
router.post("/add" , auth , async(req , res)=>{
    try {

      const userId = req.user._id
      const {productId} = req.body

      // first step to find the user's specific cart

      let cart = await Cart.findOne({userId})
      if(!cart){
        cart = new Cart({
            userId,
            products:[{productId , quantity:1}]
        })
      }

      const existingProduct = cart.products.find((product)=>product.productId.toString() === productId)

      if(existingProduct){
        existingProduct.quantity +=1
      }else{
        cart.products.push({productId, quantity:1})
      }
        
      await cart.save()
      res.status(201).json({message:"Item added to cart!" , cart:cart})
    } catch (error) {
        res.status(500).json({message:"Error to add to cart" , error:error.message})
    }
})


// get cart data
router.get("/" , auth , async(req , res)=>{
    try {
        const userId = req.user._id
        const cart = await Cart.findOne({userId}).populate("userId" , "name").populate("products.productId")
        
        let totalAmount = 0
        cart.products.forEach((product)=>{
            totalAmount+= product.productId.price * product.quantity
        })
        if(!cart){
            res.status(400).json({message:"Cart Is empty."})
        }
        res.status(200).json({message:"cart data!" , cart:cart , totalAmount})
    } catch (error) {
                res.status(500).json({message:"Error to get cart!" , error:error.message})

    }
})

// update cart.

router.patch("/update" , auth ,async(req , res)=>{
    try {
        
        const userId = req.user._id
        const{productId , action} = req.body
        
        // find user's specific cart
        const cart = await Cart.findOne({userId})
        if(!cart){
            return res.status(404).json({message:"cart not found!"})
        }

        const product = cart.products.find((product)=>product.productId.toString() === productId)

        if(!product){
            return res.status(404).json({message:"Product not found!"})
        }
        if(action === "inc"){
            product.quantity += 1
        }
        if(action === "dec" && product.quantity >1){
              product.quantity -= 1
        }
        await cart.save()
        
        res.status(200).json({message:"cart updated successfully!" , cart})
        
    } catch (error) {
        res.status(500).json({message:"error to update cart" , error:error.message})
    }
})

// remvove cart

router.delete("/delete" ,auth ,  async(req , res)=>{
    try {
        
        const userId = req.user._id
        let {productId} =  req.body

        // find cart
        let cart =await Cart.findOne({userId})
        if(!cart){
            return res.status(404).json({message:"cart not found!"})
        }

        cart.products = cart.products.filter((product)=>product.productId.toString() !== productId)
        await cart.save()
        return res.status(200).json({message:"Item removed!" , cart:cart})
    } catch (error) {
                res.status(500).json({message:"error to delete cart" , error:error.message})

    }
})
module.exports = router