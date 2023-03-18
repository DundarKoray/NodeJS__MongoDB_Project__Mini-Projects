const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('Hello world!')
})

app.use('/api/v1/tasks', tasks)

const PORT = 3000

// Mongo Atlas connection
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server is listening ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
