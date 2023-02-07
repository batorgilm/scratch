const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const newsRouter = require('./router/news');

dotenv.config()

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/scratch"
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/news', newsRouter)



app.listen(PORT,  async() => {
    
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(MONGO_URI, () => {
            console.log('MongoDB connect success')
        })
    } catch (error) {
        process.exit(1)
    }

    console.log(`Server is running ${PORT}`)
})