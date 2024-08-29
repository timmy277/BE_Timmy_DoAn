const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    profileAvatar: String,
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    type: String,
    password: String,
    role: String,
    // cart: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId , ref: 'products'
    //     }
    // ],
}, {
    timestamps : true
}); 

const userModel = mongoose.model('user', userSchema);

module.exports = userModel

