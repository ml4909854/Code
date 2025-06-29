


const express = require("express")
const auth = require("../middleware/auth.middleware")
const Order = require("../model/order.model")
const Product = require("../model/product.model")
const Cart = require("../model/cart.model")
const router = express.Router()


// get all order.
// create order from product
// create order from cart 

router.post("/fromProduct", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity = 1, address, paymentMethod } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    const totalAmount = product.price * quantity;

    const newOrder = new Order({
      userId,
      products: [{ productId, quantity }],
      address,
      paymentMethod,
      totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!", order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error ordering from product page!", error: error.message });
  }
});

// order from cart page.
router.post("/fromCart", auth, async (req, res) => {
  try {
    const { address, paymentMethod } = req.body;
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" });
    }

    let totalAmount = 0;
    let finalProducts = [];

    for (const item of cart.products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        continue; // skip if product doesn't exist
      }

      totalAmount += product.price * item.quantity;
      finalProducts.push({ productId: item.productId, quantity: item.quantity });
    }

    const newOrder = new Order({
      userId,
      products: finalProducts,
      address,
      paymentMethod,
      totalAmount,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({ message: "Order placed!", order: savedOrder });
  } catch (error) {
    return res.status(500).json({ message: "Error placing order from cart!", error: error.message });
  }
});


router.get("/" , auth , async(req , res)=>{
    try {
        const userId = req.user._id
     const order = await Order.findOne({userId}).populate("userId" , "name").populate("products.productId")
     if(!order){
        return res.status(404).json({message:"No order found!"})
     }   
     res.status(200).json({message:"Get all orders" , order:order})
     // list of the order how many orders are created
    } catch (error) {
        res.status(500).json({message:"Error to get orders"  , error:error.message})
    }
})

// delete order
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    if (order.status === "delivered") {
      return res.status(400).json({
        message: "You cannot delete this order. It has already been delivered.",
      });
    }

    const deletedOrder = await Order.findByIdAndDelete(orderId);
    res.status(200).json({
      message: "Order deleted successfully!",
      order: deletedOrder,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
});

module.exports = router