import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export default function Dashboard() {
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");

  // const currentUser = "nandan@example.com"; // 🔁 You can later fetch from login or context
  const backendURL = "https://mern-project-o12y.onrender.com/group";

   const fetchGroups = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get("https://mern-project-o12y.onrender.com/allgroup", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setGroups(res.data);
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
};


  useEffect(() => {
    fetchGroups();
  }, []);

const handleAddGroup = async () => {
  if (newGroupName.trim() === "" || newGroupDesc.trim() === "") return;

  try {
    const token = localStorage.getItem("token"); // Get token from localStorage

    await axios.post(backendURL, {
      name: newGroupName,
      description: newGroupDesc,
    }, {
      headers: {
        Authorization: `Bearer ${token}` // Send token in header
      }
    });

    setNewGroupName("");
    setNewGroupDesc("");
    fetchGroups();
  } catch (error) {
    console.error("Failed to add group:", error);
  }
};
const handleJoin = (groupName) => {
    navigate("/group", {
      state: { currentUser, groupName }, // ✅ Passing state to /group
    });
  };

  return (
    <div className="dashboard-container">
      <h1 className="welcome-message">Welcome to Peer Learning Tracker!</h1>

      <div className="add-group-form">
        <input
          type="text"
          placeholder="Group Name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="group-input"
        />
        <input
          type="text"
          placeholder="Group Description"
          value={newGroupDesc}
          onChange={(e) => setNewGroupDesc(e.target.value)}
          className="group-input"
        />
        
        <button onClick={handleAddGroup} className="add-button">
          Create Group
        </button>
      </div>

      {groups.length === 0 ? (
        <p className="no-groups">No groups yet. Create one to get started!</p>
      ) : (
        <div className="group-grid">
          {groups.map((group) => (
            <div key={group._id} className="group-card">
              <h2 className="group-title">{group.name}</h2>
              <p className="group-description">{group.description}</p>
              <button
                onClick={() => handleJoin(group.name)}
                className="join-button"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
