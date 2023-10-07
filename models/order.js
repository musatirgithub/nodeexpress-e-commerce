const mongoose = require('mongoose');


const orderSchema = mongoose.model({
    tax:{
        type:Number,
        required:true,
    },
    shippingFee:{
        type:Number,
        required:true,
    },
    subtotal:{
        type:Number,
        required:true,
    },
    total:{
        type:Number,
        required:true,
    },
    cartItems: [],
    status:{
        type:String,
        enum:['pending', 'failed', 'paid', 'delivered', 'canceled'],
        default:'pending',
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    },
    clientSecret:{
        type:String,
        required:true,
    },
    paymentIntent:{
        type:String,
    },
    
},{timestamps:true})

module.exports = mongoose.model('Order', orderSchema);