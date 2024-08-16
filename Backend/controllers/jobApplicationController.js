// controllers/jobApplicationController.js
const JobApplication = require('../models/jobApplication');

// Create a new job application
exports.createJobApplication = async (req, res) => {
    try {
        const jobApplication = new JobApplication(req.body);
        await jobApplication.save();
        res.status(201).json({ message: 'Job application submitted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting job application.', error });
    }
};

// Get all job applications
exports.getAllJobApplications = async (req, res) => {
    try {
        const jobApplications = await JobApplication.find();
        res.status(200).json(jobApplications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job applications.', error });
    }
};

// Get a single job application by ID
exports.getJobApplicationById = async (req, res) => {
    try {
        const jobApplication = await JobApplication.findById(req.params.id);
        if (!jobApplication) {
            return res.status(404).json({ message: 'Job application not found.' });
        }
        res.status(200).json(jobApplication);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job application.', error });
    }
};
