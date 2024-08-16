// models/affiliate.js
const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    collegeName: { type: String },
    courseDetails: { type: String },
    companyName: { type: String },
    companyEmail: { type: String },
    companySize: { type: String },
    motivation: { type: String, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

module.exports = Affiliate;
