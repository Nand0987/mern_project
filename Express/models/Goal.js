const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  progress: { type: Number, required: true },
  deadline: { type: String, required: true },
  group: { type: String, required: true },
  createdBy: { type: String, required: true }, // user's email or username
}, { timestamps: true });

module.exports = mongoose.model("Goal", goalSchema);
