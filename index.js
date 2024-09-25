const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const connectDB = require('./db');
const router = require('./routes');

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    preflightContinue: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
}))

app.options('*', cors());
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser()) 

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.use("/api",router)

const PORT = process.env.PORT ||  8080

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log('MongoDB connected successfully');
        console.log(`Example app listening on port ${PORT}`)
    })  
})