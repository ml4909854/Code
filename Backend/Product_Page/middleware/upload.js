const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    
    if (!allowedFormats.includes(file.mimetype)) {
      const err = new Error("Unsupported image format");
      err.http_code = 400;
      throw err;
    }

    return {
      folder: "products", // separate folder for product images
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`, // optional: clean filename
      transformation: [
        { width: 800, height: 800, crop: "limit" },
        { quality: "auto" },
        { fetch_format: "auto" }
      ],
    };
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB per image
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

module.exports = upload