const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserById,
  
} = require("../controllers/authController");

// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Get current user
router.get("/me/:id", getUserById);



module.exports = router;
