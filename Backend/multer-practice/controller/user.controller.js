const express = require("express");
const router = express.Router();
const upload = require("../multer/multer.middleware.jsx");
const User = require("../model/user.model.js");

// Route to create a user with image upload
router.post("/", upload.single("profileImage"), async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const imageUrl = req.file ? req.file.path : "";

    const newUser = new User({ firstname, lastname, imageUrl });
    await newUser.save();

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" ,error:error });
  }
});

module.exports = router;
