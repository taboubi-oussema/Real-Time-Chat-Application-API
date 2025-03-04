const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Create HTTP server
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200", // Allow the frontend to access WebSocket
    methods: ["GET", "POST"],
  },
});

// Socket.io connection handler
io.on("connection", (socket) => {
  console.log('User connected:', socket.id);

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data); // Broadcast message to all users
  });

  socket.on("disconnect", () => console.log('User disconnected:', socket.id));
});

http.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
