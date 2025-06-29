const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const Review = require("../model/review.model");
const Order = require("../model/order.model");

router.post("/reviews", auth, async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const userId = req.user._id;

    // ✅ Check if user has a delivered order with this product
    const deliveredOrders = await Order.find({
      userId,
      status: "delivered",
      "products.productId": productId,
    });

    if (!deliveredOrders || deliveredOrders.length === 0) {
      return res.status(400).json({
        message: "You can only review products that you have received.",
      });
    }

    // ✅ Check if review already exists
    const existingReview = await Review.findOne({ userId, productId });
    if (existingReview) {
      return res.status(400).json({
        message: "You have already reviewed this product.",
      });
    }

    // ✅ Create and save review
    const review = new Review({ userId, productId, rating, comment });
    const savedReview = await review.save();

    res.status(201).json({ message: "Review added!", review: savedReview });
  } catch (error) {
    res.status(500).json({
      message: "Error submitting review",
      error: error.message,
    });
  }
});

module.exports = router