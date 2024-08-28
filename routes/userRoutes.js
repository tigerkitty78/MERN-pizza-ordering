const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Adjust the path based on your file structure

// POST route for user registration
router.post("/register", async (req, res) => {
    console.log(req.body); // Log the received data

    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save(); // Await the save operation
        console.log('User saved successfully'); // Log success message
        res.send('User registered successfully');
    } catch (error) {
        console.error('Error saving user:', error); // Log the error
        res.status(400).json({ message: error });
    }
});

module.exports = router;
