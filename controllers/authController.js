const User = require("../models/User");

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {};

// @desc    Get User BY Id
// @route   GET /api/auth/me
// @access  Private
exports.getUserById = async (req, res) => {};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {};
