// models/JobApplication.js
const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
    },
    courseDetails: {
        type: String,
    },
    lastQualification: {
        type: String,
    },
    companyName: {
        type: String,
    },
    currentRole:{
        type: String,
    },
    currentCtc:{
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
