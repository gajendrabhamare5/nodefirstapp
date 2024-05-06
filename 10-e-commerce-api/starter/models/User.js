const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 5,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],

    },
    password: {
        type: String,
        required: [true, 'Please provide password'],

    },
    role: {
        type: String,
        enum : ['admin','user'],
        default:'user',
    },
})

module.exports = mongoose.model('User',UserSchema)