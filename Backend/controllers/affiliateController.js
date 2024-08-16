// controllers/affiliateController.js
const Affiliate = require("../models/affiliate");
const bcrypt = require("bcrypt");

const createAffiliate = async (req, res) => {
  try {
    // Extracting necessary fields from request body
    const { password, confirmPassword, ...otherFields } = req.body;

    // Validate password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new affiliate with hashed password
    const newAffiliate = new Affiliate({
      ...otherFields,
      password: hashedPassword,
    });

    await newAffiliate.save();

    res
      .status(201)
      .json({
        message: "Affiliate created successfully",
        affiliate: newAffiliate,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createAffiliate };
