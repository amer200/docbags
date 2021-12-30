const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const userSchema = new Schema({
    accountnum: {
        type: String
    },
    password: {
        type: String
    },
    docs: {
        type: Array
    }
})
module.exports = mongoose.model('User', userSchema);