const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    role: String,
    permission: [{type: String}]
});

module.exports = mongoose.model('roles', roleSchema);