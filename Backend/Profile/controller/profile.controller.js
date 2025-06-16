const express = require("express");
const router = express.Router();
const Profile = require("../model/profile.model");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post("/create", auth, upload.single("image"), async (req, res) => {
  const { fullName, bio } = req.body;
  const userId = req.user._id; // ✅ FIXED
  const imageUrl = req.file.path;
  console.log(fullName , bio , userId , imageUrl)

  try {
    const profile = await Profile.create({
      userId,
      fullName,
      bio,
      imageUrl,
    });

    res.status(201).json({ message: "Profile created", profile });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Invalid data or failed to create profile", error: err });
  }
});

module.exports = router;
