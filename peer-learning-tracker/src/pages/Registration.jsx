import { useState } from "react";
import "../pages/Registration.css"; // Reuse the same CSS for consistent styling
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleRegister = async(e) => {
   
    if (name && email && password) {
       try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password
      });

      console.log('Login Success:', response.data);
      navigate('/')
    } catch (error) {
      console.error('Login Failed:', error.response?.data || error.message);
    }

      // navigate("/")
      // TODO: Connect to backend later
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Please Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-input"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button onClick={handleRegister} className="login-button">
          Register
        </button>
      </div>
    </div>
  );
}
