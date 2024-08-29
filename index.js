const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const connectDB = require('./db');
const router = require('./routes');

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser()) 


app.use("/api",router)

const PORT = process.env.PORT ||  8080

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log('MongoDB connected successfully');
        console.log(`Example app listening on port ${PORT}`)
    })  
})