const Chat = require("../models/Chat");
const Message = require("../models/Message");
const User = require("../models/User");

// @desc    Create or access a one-on-one chat
// @route   POST /api/chat
// @access  Private
exports.accessChat = async (req, res) => {};

// @desc    Get all chats for a user
// @route   GET /api/chat
// @access  Private
exports.fetchChats = async (req, res) => {};

// @desc    Create a group chat
// @route   POST /api/chat/group
// @access  Private
exports.createGroupChat = async (req, res) => {};

// @desc    Rename a group chat
// @route   PUT /api/chat/group/rename
// @access  Private
exports.renameGroupChat = async (req, res) => {};

// @desc    Add user to a group
// @route   PUT /api/chat/group/add
// @access  Private
exports.addToGroup = async (req, res) => {};

// @desc    Remove user from a group
// @route   PUT /api/chat/group/remove
// @access  Private
exports.removeFromGroup = async (req, res) => {};

// @desc    Send a new message
// @route   POST /api/chat/message
// @access  Private
exports.sendMessage = async (req, res) => {};

// @desc    Get all messages for a chat
// @route   GET /api/chat/message/:chatId
// @access  Private
exports.getAllMessages = async (req, res) => {};
