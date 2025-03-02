const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

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
app.use("/api/chat", chatRoutes);

// Create HTTP server
const server = http.createServer(app);

// Socket.io setup
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Socket.io connection handler
io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

  // Join a chat room
  socket.on("join_chat", (chatId) => {
    socket.join(chatId);
    console.log(`User joined chat: ${chatId}`);
  });

  // Handle new message
  socket.on("send_message", (messageData) => {
    io.to(messageData.chatId).emit("receive_message", messageData);
  });

  // Handle typing status
  socket.on("typing", (data) => {
    socket.to(data.chatId).emit("user_typing", data);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
