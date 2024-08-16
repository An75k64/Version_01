const College = require("../models/College"); // Import the College model
const { validationResult } = require("express-validator");

// Controller function to handle college form submission
const submitCollegeForm = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create a new college document using data from the request
    const newCollege = new College({
      polytechnicCourses: req.body.polytechnicCourses,
      ugCourses: req.body.ugCourses,
      pgCourses: req.body.pgCourses,
      collegeName: req.body.collegeName,
      location: req.body.location,
      studentsStrengthUG: req.body.studentsStrengthUG,
      studentsStrengthPG: req.body.studentsStrengthPG,
      collegeEmail: req.body.collegeEmail,
      mobileNumber: req.body.mobileNumber,
      placementSeason: req.body.placementSeason,
      upcomingEvents: req.body.upcomingEvents,
      partnershipInterests: req.body.partnershipInterests
    });

    // Save the college document to the database
    await newCollege.save();

    // Send a success response
    res.status(201).send("College details submitted successfully");
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error submitting college details:", error);
    res.status(500).send("Error submitting college details");
  }
};

// Controller function to handle fetching all college forms
const getCollegeForms = async (req, res) => {
  try {
    // Retrieve all college documents from the database
    const colleges = await College.find();

    // Send the colleges as a JSON response
    res.status(200).json(colleges);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error fetching college forms:", error);
    res.status(500).send("Error fetching college forms");
  }
};

// Controller function to handle fetching a single college form by ID
const getCollegeFormById = async (req, res) => {
  try {
    // Retrieve a specific college document from the database by ID
    const college = await College.findById(req.params.id);

    if (!college) {
      // If no college is found, send a 404 response
      return res.status(404).send("College form not found");
    }

    // Send the college as a JSON response
    res.status(200).json(college);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error fetching college form:", error);
    res.status(500).send("Error fetching college form");
  }
};

// Export the controller functions to be used in routes
module.exports = {
  submitCollegeForm,
  getCollegeForms,
  getCollegeFormById,
};
