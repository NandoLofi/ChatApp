//dependencies
require('dotenv').config()
const express = require('express')


//app
const app = express()
const PORT = process.env.PORT || 3001

//DB
const DATABASE_URL = process.env.DATABASE_URL
const mongoose = require('mongoose')
mongoose.connect(DATABASE_URL)

app.get('/', (req, res) => {
    res.send("Hello, welcome!")
})


//listener
app.listen(PORT, ()=>console.log(`You are on listening on port ${PORT}`))