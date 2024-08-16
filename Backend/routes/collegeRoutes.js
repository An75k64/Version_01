// routes/collegeRoutes.js

const express = require("express");
const { check } = require("express-validator");
const collegeController = require("../controllers/CollegeController");

const router = express.Router();

router.post(
  "/submit-college-form",
  [
    check("collegeName")
      .not()
      .isEmpty()
      .withMessage("College name is required"),
    check("location").not().isEmpty().withMessage("Location is required"),
    check("studentsStrengthUG")
      .isNumeric()
      .withMessage("Students strength (UG) must be a number"),
    check("studentsStrengthPG")
      .isNumeric()
      .withMessage("Students strength (PG) must be a number"),
    check("collegeEmail").isEmail().withMessage("Valid email is required"),
    check("mobileNumber")
      .isMobilePhone()
      .withMessage("Valid mobile number is required"),
    check("placementSeason")
      .not()
      .isEmpty()
      .withMessage("Placement season duration is required"),
  ],
  collegeController.submitCollegeForm
);

//Route to get all the college Form
router.get("/college-forms", collegeController.getCollegeForms);

//Route to fetch a single college form by ID
router.get("/college-form/:id", collegeController.getCollegeFormById);

module.exports = router;
