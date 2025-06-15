const mongoose = require('mongoose'); // Import mongoose

// Define user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // no two users with same email
  },
  password: {
    type: String,
    required: true,
  },
  fullName: String,
  description: String,
  imageUrl: String, // profile picture
});

// Export the User model
const User= mongoose.model('User', userSchema);
module.exports = User
