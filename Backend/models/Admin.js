// models/Admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Added email field
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

module.exports = mongoose.model("Admin", adminSchema);
