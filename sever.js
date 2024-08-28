const express = require("express");
const mongoose = require("mongoose");
const Pizza = require("./models/pizzaModel").default;


const User = require('./models/userModel').default; 

const cors = require('cors');
const db = require("./db"); // Assuming this file correctly connects to MongoDB

const app = express();
const port = process.env.PORT || 5000;
const pizzasRoutes = require('./routes/pizzasRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(cors());



// Test endpoint to check if server is working
app.get("/", (req, res) => {
  res.send("Server working");
});

app.use('/api/users/', userRoutes)
// Endpoint to fetch all pizzas
app.use('/api/pizzas/', pizzasRoutes)

// MongoDB connection check
mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
}).on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
