const User = require("../models/User");

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const registerUser = await User.create({
      username,
      email,
      password,
    });

    // Generate token
    const token = null;
    res.status(201).json({
      success: true,
      token,
      user: {
        id: registerUser._id,
        username: registerUser.username,
        email: registerUser.email,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  
};

// @desc    Get User BY Id
// @route   GET /api/auth/me
// @access  Private
exports.getUserById = async (req, res) => {
  res.send("fds")
  
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {};
