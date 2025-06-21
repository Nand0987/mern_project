const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Optional: Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
