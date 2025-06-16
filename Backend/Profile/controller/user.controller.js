const express = require("express");
const router = express.Router();
const User = require("../model/user.model"); // ✅ make sure this path is correct
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ✅ Register Route
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    // Hash the password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ email, password: hashed });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Registration Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    // Compare passwords
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid password" });

    // Sign JWT Token
    const token = jwt.sign({ id: user._id }, "masai", { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
