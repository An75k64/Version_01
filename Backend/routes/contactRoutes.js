const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  deleteContacts,
} = require("../controllers/contactController");

// Route to create a new contact message
router.post("/contact", createContact);

// Route to get all contact messages
router.get("/contacts", getAllContacts);

// Route to get a single contact message by ID
router.get("/contact/:id", getContactById);

// Route to delete multiple contact messages by IDs
router.delete("/contacts", deleteContacts);

module.exports = router;
