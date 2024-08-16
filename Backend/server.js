require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const resumeRouter = require("./routes/resumeRoutes");
const collegeRouter = require("./routes/collegeRoutes");
const companyRouter = require("./routes/companyRoutes");
const contactRouter = require("./routes/contactRoutes");
const affiliateRoutes = require("./routes/affiliateRoutes");
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from uploads directory

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Use the resume router
app.use("/api/resumes", resumeRouter);

// Use the College Form Router
app.use("/api/colleges", collegeRouter);

// Use the Company Form Router
app.use("/api/company", companyRouter);

//use the contact us Router
app.use("/api",contactRouter);

//use the affiliate router
app.use("/api", affiliateRoutes);

//use the job router
app.use("/api", jobApplicationRoutes);

// cards api starts
const CardSchema = new mongoose.Schema({
  id: String,
  title: String,
  location: String,
  salary: String,
  experience: String,
  
  });
  
  const Card = mongoose.model('Card', CardSchema);
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});
//cards api ends

// Default route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to TalentConnect API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
