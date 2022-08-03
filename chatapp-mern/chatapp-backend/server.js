const express = require('express')
const ChatMessage = require('./models/messages')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001
require('dotenv').config()

//middleware
app.use(express.json())

//pusher real-time
const Pusher = require('pusher')

const pusher = new Pusher({
    appId: "1457756",
    key: "a6d179ec27a42763028a",
    secret: "2f67831564b1deb9f2ef",
    cluster: "mt1",
    useTLS: true
  });

//DB
const db = mongoose.connection

db.once('open', ()=> {
    console.log("We are connected to DB")

    const messageCollection = db.collection("chatmessages");

    const changeStream = messageCollection.watch()

    changeStream.on('change', (change) => {
        console.log(change)

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
                {
                    name: messageDetails.user,
                    message: messageDetails.message
                }
            );
        } else {
            console.log("error with pusher")
        }
    });
});
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//index route
app.get('/', (req, res) => {
    res.send("Hello, welcome!")
})

//sync stores messages
app.get('/messages/sync', (req, res)=>{
    ChatMessage.find((err, data)=>{
        if (err){
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    })
})

//new messages
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
