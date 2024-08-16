const Company = require("../models/Company"); // Import the company model
const { validationResult } = require("express-validator");

// Controller function to handle company form submission
const submitCompanyForm = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create a new company document using data from the request
    const newCompany = new Company({
      companyName: req.body.companyName,
      industry: req.body.industry,
      location: req.body.location,
      companySize: req.body.companySize,
      contactPerson: req.body.contactPerson,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactPhone,
      partnershipInterests: req.body.partnershipInterests,
      additionalInfo: req.body.additionalInfo,
    });

    // Save the company document to the database
    await newCompany.save();

    // Send a success response
    res.status(201).send("Company details submitted successfully");
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error submitting company details:", error);
    res.status(500).send("Error submitting company details");
  }
};

// Controller function to handle fetching all company forms
const getCompanyForms = async (req, res) => {
  try {
    // Retrieve all company documents from the database
    const company = await Company.find();

    // Send the company as a JSON response
    res.status(200).json(company);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error fetching company forms:", error);
    res.status(500).send("Error fetching company forms");
  }
};

// Controller function to handle fetching a single company form by ID
const getcompanyFormById = async (req, res) => {
  try {
    // Retrieve a specific company document from the database by ID
    const company = await Company.findById(req.params.id);

    if (!company) {
      // If no company is found, send a 404 response
      return res.status(404).send("company form not found");
    }

    // Send the company as a JSON response
    res.status(200).json(company);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error fetching company form:", error);
    res.status(500).send("Error fetching company form");
  }
};

// Export the controller functions to be used in routes
module.exports = {
  submitCompanyForm,
  getCompanyForms,
  getcompanyFormById,
};
