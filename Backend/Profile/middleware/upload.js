const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utility/cloudinary.js"); // ✅ No redeclaration

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

module.exports = upload;
