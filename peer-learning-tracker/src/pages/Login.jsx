import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../pages/Login.css"; // Import the CSS file
import axios from 'axios';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage]=useState("")
  const navigate = useNavigate();
 

  const handleLogin = async(e) => {
    e.preventDefault();

    if (email && password) {
     try {
      const response = await axios.post('https://mern-project-o12y.onrender.com/', {
      
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      console.log('Login Success:', response.data.token);
      login(email); // call login(email) from context
      navigate("/dashboard");

    } catch (error) {
      setMessage("Invalid Input")
      console.error('Login Failed:', error.response?.data || error.message);
    }
    } else {
      alert('Please fill in all fields');
    }
  };


  return (
    <div className="login-container">
     
      <div className="login-box">
         <h2 className="login-title" style={{color:"red"}}>Invalid Input</h2>
        <h2 className="login-title">Please login</h2>

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

        <div className="login-checkbox">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
        </div>

        

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
         
         <button onClick={()=>{navigate("/register")}} className="login-button"  >
          Register
        </button>
      </div>
    </div>
  );
}
