import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Registration";
import GoalCard from "./components/GoalCard"
import GoalCardContainer from "./components/GoalCardContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/register" element={<Register />} />
          <Route path="/group" element={< GoalCardContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
