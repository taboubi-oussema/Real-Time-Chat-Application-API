const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserById,
  updateProfile,
} = require("../controllers/authController");


// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Get current user
router.get("/me",  getUserById);

// Update user profile
router.put("/profile", updateProfile);

module.exports = router;
