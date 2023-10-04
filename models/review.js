const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:[true, 'Please provide review rating'],
    },
    rating:{
        type:String,
        trim:true,
        required:[true, 'Please provide review title'],
        maxLength:100,
    },
    comment:{
        type:String,
        required:[true, 'Please provide review title'],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:true,
    },
}, {timestamps:true})