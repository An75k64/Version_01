// routes/admin.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Admin = require("../models/Admin");
const router = express.Router();
const transporter = require("../config/email");

// Environment variables
require("dotenv").config();


// Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token (if using JWT)
    const token = jwt.sign({ id: admin._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    // Send the token and a success message
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { username } = req.body; // Change 'email' to 'username'
  try {
    const admin = await Admin.findOne({ username }); // Find by username
    if (!admin) return res.status(404).json({ message: "Username not found" });

    const token = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit token
    admin.resetToken = token;
    admin.resetTokenExpiration = Date.now() + 3600000; // 1 hour
    await admin.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to a fixed admin email, if needed
      subject: "Password Reset Code",
      text: `Your password reset code is: ${token}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset code sent" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// Reset Password Route
router.post("/reset-password", async (req, res) => {
  const { email, token, newPassword } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Email not found" });

    if (admin.resetToken !== token || admin.resetTokenExpiration < Date.now())
      return res.status(400).json({ message: "Invalid or expired token" });

    admin.password = await bcrypt.hash(newPassword, 10);
    admin.resetToken = undefined;
    admin.resetTokenExpiration = undefined;
    await admin.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
