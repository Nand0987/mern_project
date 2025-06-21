const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Import the User model
require('dotenv').config();

// Handle POST request to / (Login)
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // 2. Compare passwords (plain-text version)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // 3. Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // 4. Send response
    res.json({ message: 'Login successful', email: user.email, token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
