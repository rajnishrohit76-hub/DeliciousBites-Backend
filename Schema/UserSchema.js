const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true }, // Example: "Male", "Female", "Other"
  hobbies: { type: [String], default: [] }, // Array of hobbies
  country: { type: String, required: true } // Example: "India"
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
 