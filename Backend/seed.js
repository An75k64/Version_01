const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/mydatabase"; // Replace with your MongoDB URI

mongoose.connect(mongoURI, {
    
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

const cardSchema = new mongoose.Schema({
    id: String,
    title: String,
    location: String,
    salary: String,
    experience: String,
});

const Card = mongoose.model('Card', cardSchema);

const seedData = [
    {
      id: 1,
      title: 'Copy Writer',
      description: 'This is the first card',
      location: 'Ranchi',
      salary: '10,000/month',
      experience: '2 year'
    },
    {
      id: 2,
      title: 'Web Developer',
      description: 'This is the second card',
      location: 'kolkata',
      salary: '50,000/month',
      experience: '5 year'
    },
    {
      id: 3,
      title: 'Senior Executive',
      description: 'This is the second card',
      location: 'kolkata',
      salary: '25,000/month',
      experience: '2 year'
    },
    {
      id: 4,
      title: 'Human Resource',
      description: 'This is the second card',
      location: 'Noida',
      salary: '15,000/month',
      experience: '1 year'
    },
    {
      id: 5,
      title: 'Bussiness Executive',
      description: 'This is the second card',
      location: 'Pune',
      salary: '10,000/month',
      experience: '0 year'
    },
    {
      id: 6,
      title: 'Telecaller',
      description: 'This is the second card',
      location: 'Pune',
      salary: '20,000/month',
      experience: '0 year'
    },
    {
      id: 7,
      title: 'DevOps Developer',
      description: 'This is the second card',
      location: 'kolkata',
      salary: '20,000/month',
      experience: '2 year'
    },
    {
      id: 8,
      title: 'Frontend Developer',
      description: 'This is the second card',
      location: 'kolkata',
      salary: '25,000/month',
      experience: 'Fresher'
    },
  
  
    // Add more cards as needed
  ];

Card.insertMany(seedData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error('Error inserting data:', err));