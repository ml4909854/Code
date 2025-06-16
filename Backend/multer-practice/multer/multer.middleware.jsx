const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload"); // directory where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // file saved with its original name
  }
});

const upload = multer({ storage });

module.exports = upload;
