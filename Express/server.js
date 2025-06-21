// server.js
const express = require('express');
const app = express();
const loginRoute = require('./login'); // Import the login route
const registerRoute=require('./register')
const envsecrate=require('dotenv').config()
const verifyToken=require('./verifyToken')
const groupRoutes=require('./group')
const connectDB=require('./config/db')
const goalRoutes = require("./goal");
const cors=require('cors')
app.use(cors())
app.use(express.json()); // Middleware to parse JSON body
connectDB()

// Use the route
app.use('/', loginRoute); // Now /api/login will work
app.use(registerRoute)
app.use(groupRoutes)
app.use(goalRoutes)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 