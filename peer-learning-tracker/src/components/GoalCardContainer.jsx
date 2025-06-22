import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GoalCard from "./GoalCard";
import "./goalcardstyle.css";
import axios from "axios";

export default function GoalCardContainer() {
  const location = useLocation();
  const { currentUser, groupName } = location.state || {}; // 

  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");
  const [deadline, setDeadline] = useState("");

  const backendURL = "https://mern-project-o12y.onrender.com/goal";

  useEffect(() => {
    if (groupName) {
      fetchGoals();
    }
  }, [groupName]);

const fetchGoals = async () => {
  try {
    const res = await axios.get("http://localhost:5000/allgoal", {
      params: {
        group: groupName,
        user: currentUser
      },
      headers: {
        Authorization: `Bearer ${token}` // attach token in header
      }
    });

    setGoals(res.data);
  } catch (error) {
    console.error("Error fetching goals:", error);
  }
};


const handleAddGoal = async (e) => {
  e.preventDefault();
  if (!title || !progress || !deadline) return;

  const newGoal = {
    title,
    progress: Number(progress),
    deadline,
    group: groupName,
    createdBy: currentUser,
  };

  try {
    const token = localStorage.getItem("token"); // get token from localStorage

    await axios.post(backendURL, newGoal, {
      headers: {
        Authorization: `Bearer ${token}`, // attach token in header
      },
    });

    setTitle("");
    setProgress("");
    setDeadline("");
    fetchGoals();
  } catch (error) {
    console.error("Error adding goal:", error);
  }
};


  return (
    <div className="goal-container">
      <h2 className="section-title">🎯 {groupName} - Learning Goals</h2>

      <form onSubmit={handleAddGoal} className="goal-form">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Progress %"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          min="0"
          max="100"
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button type="submit">Add Goal</button>
      </form>

      <div className="goal-grid">
        {goals.length === 0 ? (
          <p className="no-goals">No goals yet in this group.</p>
        ) : (
          goals.map((goal) => (
            <GoalCard
              key={goal._id}
              title={goal.title}
              progress={goal.progress}
              deadline={goal.deadline}
              createdBy={goal.createdBy}
              currentUser={currentUser}
            />
          ))
        )}
      </div>
    </div>
  );
}
