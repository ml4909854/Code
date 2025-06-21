const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(404)
        .json({ message: "token not found! , No token Provided" });
    }

    const decoded = jwt.verify(token, "token");
    req.user = await User.findById(decoded._id);
        next()
  } catch (error) {
    console.log("req.user.error");
    res.status(500).json({ message: "Invalid or expired token!" });
  }
};


module.exports = auth