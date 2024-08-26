const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    url: {type: String},
    email: String,
    name: String,
    type: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId , ref: 'products'
        }
    ]
}); 

module.exports = mongoose.model('users', userSchema);

