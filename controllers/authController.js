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
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password match
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token (to be implemented properly later)
    const token = null;

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Get User BY Id
// @route   GET /api/auth/me
// @access  Private
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find user by ID
    const user = await User.findById(userId).select('-password -email');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {};
