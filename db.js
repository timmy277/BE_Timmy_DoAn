const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1);
    }
}
module.exports = connectDB