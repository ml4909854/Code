

const express = require("express")
const auth = require("../middleware/auth.middleware")
const checkRole = require("../middleware/checkRole.middleware")
const Order = require("../model/order.model")
const router = express.Router()

// admin get acess of all the order of the user

router.get("/" , auth , checkRole("admin") , async(req , res)=>{
    try {
          const order = await Order.find().populate("userId" , "name").populate("products.productId")
          if(!order){
            return res.status(404).json({message:"No order found!"})
          }

          res.status(200).json({message:"Get All orders" , order:order})
    } catch (error) {
        res.status(500).json({message:"ERror to get all orders" , error:error.message})
    }
})

// update the status of the order

router.patch("/update/:id" , auth , checkRole("admin") , async(req , res)=>{
    try {
        const orderId = req.params.id
        const {status} = req.body

        const order = await Order.findById(orderId)
        if(!order){
            return res.status(404).json({message:"Order not found!"})
        }
        order.status = status
        await order.save()
        res.status(200).json({message:"status updated successfully!" , order})
    } catch (error) {
        res.status(500).json({message:"error to update status" , error:error.message})
    }
})

module.exports = router