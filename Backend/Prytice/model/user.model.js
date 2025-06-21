const mongoose = require("mongoose");
const userShcema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("User", userShcema);
module.exports = User;
