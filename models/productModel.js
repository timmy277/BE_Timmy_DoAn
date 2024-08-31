const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number,
},{
    timestamps : true   
}

);
const productModel = mongoose.model('product', productSchema);

module.exports = productModel;

