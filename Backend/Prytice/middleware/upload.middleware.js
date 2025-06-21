const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

    if (!allowedFormats.includes(file.mimetype)) {
      const err = new Error("Image format is not valid!");
      err.http_code = 400;
      throw err;
    }

    return {
      folder: "products",
      public_id: `${Date.now()}-${file.originalname}`, // ✅ use original file name instead of user id
      transformation: [
        { width: 150, height: 150, crop: "fill" },
        { quality: "auto:low" },
        { fetch_format: "auto" }
      ]
    };
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
});

module.exports = upload;
