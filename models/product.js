const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{type:String, trim:true, required:[true, 'Please provide product name'], maxLength:[100, 'Product name cannot excess 100 characters']},
    price:{type:Number},
    description:{type:String},
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