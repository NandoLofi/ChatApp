const mongoose = require('mongoose')

const chatappScheme = new mongoose.Schema ({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean
})
 
const ChatMessage = mongoose.model('chatmessages', chatappScheme)
module.exports = ChatMessage