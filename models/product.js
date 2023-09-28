const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String, 
        trim:true, 
        required:[true, 'Please provide product name'], 
        maxLength:[100, 'Product name cannot excess 100 characters'],
    },
    price:{
        type:Number, 
        required:[true, 'Please provide product price'], 
        default:0,
    },
    description:{
        type:String, 
        trim:true, 
        required:[true, 'Please provide product description'], 
        maxLength:[1000, 'Description cannot excess 1000 characters'],
    },
    image:{type:String},
    category:{type:String},
    company:{type:String},
    colors:{type:[]},
    featured:{type:Boolean},
    freeShipping:{type:Boolean},
    inventory:{type:Number},
    averageRating:{type:Number},
    user:
})