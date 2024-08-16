// routes/jobApplicationRoutes.js
const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');

router.post('/api/jobapplications', jobApplicationController.createJobApplication);
// router.get('/api/jobapplications', jobApplicationController.getAllJobApplications);
router.get('/api/jobapplications/:id', jobApplicationController.getJobApplicationById);

module.exports = router;
