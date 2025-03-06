const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const User = require("./models/User"); // Import your User model
// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Serve Angular static files
app.use(express.static(path.join(__dirname, "dist")));

// Middleware
app.use(express.json());
app.use(cors());

app.get("/login/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Routes
app.use("/api/auth", authRoutes);

// Create HTTP server
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*", // Allow the frontend to access WebSocket
    methods: ["GET", "POST"],
  },
});
// Socket.io connection handler
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data); // Broadcast message to all users
  });

  socket.on("sendPrivateMessage", ({ recipientId, message, username }) => {
    socket.to(recipientId).emit("receiveMessage", { user: username, message }); // Send message to specific user
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    // Optionally, you can remove the socket ID from the database here
  });
});

http.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
