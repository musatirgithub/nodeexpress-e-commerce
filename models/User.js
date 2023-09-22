const mongoose = require("mongoose");
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide name'],
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:[true, 'Please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email',
        }
    },
    password:{
        type:String,
        required:[true, 'Please provide password'],
        minlength:3,
    },
    role:{
        type:String,
        enum:['admin', 'user'],
        default:'user',
    },
})

module.exports = mongoose.Model('User', UserSchema)