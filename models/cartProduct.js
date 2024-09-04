const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({

    productId: { type: String },
    quantity: Number,
    userId: String,
},{
    timestamps : true
});
const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;

