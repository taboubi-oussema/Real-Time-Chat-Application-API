const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Message", MessageSchema);
