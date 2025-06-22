const express = require("express");
const router = express.Router();
const Group = require("./models/Group");
const verifyToken=require('./verifyToken')

// POST: Add a group
router.post("/group",verifyToken, async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newGroup = new Group({ name, description });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET: Fetch all groups
router.get("/allgroup",verifyToken, async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
