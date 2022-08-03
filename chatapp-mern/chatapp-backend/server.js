const ChatMessage = require('./models/messages')

//dependencies
require('dotenv').config()
const express = require('express')


//app
const app = express()
const PORT = process.env.PORT || 3001

//DB
const DATABASE_URL = process.env.DATABASE_URL
const mongoose = require('mongoose')
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.send("Hello, welcome!")
})

app.post('/messages/new', (req, res)=>{
    const newMessage = req.body
    ChatMessage.create(newMessage, (err, data)=>{
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send("New Messages created")
        }
    })
})





//listener
app.listen(PORT, ()=>console.log(`You are on listening on port ${PORT}`))