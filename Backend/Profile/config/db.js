
const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/PROFILE";

const connectDB = async () => {
  try {
    await mongoose.connect(mongourl);
    console.log("db connected");
  } catch (error) {
    console.log("db error!", error);
  }
};

module.exports = connectDB;
