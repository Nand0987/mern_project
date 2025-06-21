const express = require("express");
const router = express.Router();
const Goal = require("./models/Goal");

// Add new goal (POST /api/goals)
router.post("/goal", async (req, res) => {
  try {
    const { title, progress, deadline, group, createdBy } = req.body;

    const newGoal = new Goal({ title, progress, deadline, group, createdBy });
    await newGoal.save();

    res.status(201).json({ message: "Goal added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error while adding goal" });
  }
});

// Get all goals by group (GET /api/goals?group=React)
// Express route
router.get('/allgoal', async (req, res) => {
  const { group, user } = req.query;

  if (!group || !user) {
    return res.status(400).json({ error: "Group and user are required" });
  }

  try {
    const goals = await Goal.find({ group, createdBy: user });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch goals" });
  }
});


module.exports = router;
