const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    url: {type: String},
    name: String,
    description: String
});

module.exports = mongoose.model('products', productSchema);

