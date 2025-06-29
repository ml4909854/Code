const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ✅ Virtual field to populate reviews
productSchema.virtual("reviews", {
  ref: "Review",                     // name of the Review model
  localField: "_id",                 // product._id
  foreignField: "productId",         // in Review schema
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
