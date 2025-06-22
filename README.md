# 📘 Peer Learning Tracker Lite

A minimal full-stack web application to help users join learning groups and track their learning goals collaboratively.

Built using:
- ⚛️ React (Vite)
- 🌐 Node.js + Express
- 🛢️ MongoDB (via MongoDB Atlas)
- 🚀 Deployed on Render


## ✨ Features

- 🔐 User login with JWT authentication
- 👥 Join or view available learning groups
- ✅ Add and view learning goals
- 📊 Track progress with visual indicators
- 🌍 Fully responsive UI


## 🚀 Live Demo

🌐 [Click here to view the live site](https://mern-project-2-ldtz.onrender.com)

🛠️ Backend API:https://mern-project-o12y.onrender.com/

---

## 📦 Installation & Setup (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas (or local MongoDB)
- Git

### 1. Clone the Repository
git clone https://github.com/Nand0987/mern_project
cd peer-learning-tracker
2. Set Up Backend
cd Express
npm install
Create a .env file:


PORT=5000
MONGO_URI=mongodb+srv://2021pgcaca006:oH6Kop9Gc7XQIblE@cluster0.5nwanfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=12345
Run the backend:
npm start

3. Set Up Frontend

cd ../peer-learning-tracker
npm install
npm run dev
📁 Project Structure

peer-learning-tracker-lite/
├── peer-learning-tracker/           # React frontend (Vite)
├── Express/           # Express backend (Node.js, MongoDB)
├── README.md         # Project documentation
└── .env              # Environment variables (not committed)
🧠 Technologies Used
Tech	Role
React (Vite)	Frontend Framework
Express.js	Backend API
MongoDB Atlas	Database
JWT	Authentication
Render	Deployment

🛡️ Security Notes
All passwords/tokens are stored securely using environment variables

JWT is used for secure session handling

🧑‍💻 Author
Made with ❤️ by Nandan Kumar Mishra

📜 License
This project is open source and available under the MIT License.
