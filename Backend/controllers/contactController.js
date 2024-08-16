const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  try {
    const { userType, name, email, message } = req.body;
    const newContact = new Contact({ userType, name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact message saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact message", error });
  }
};
