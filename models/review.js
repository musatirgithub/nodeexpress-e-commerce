const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:[true, 'Please provide review rating'],
    },
    title:{
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
}, {timestamps:true});

ReviewSchema.index({product:1, user:1}, {unique:true});

// Because we wanted to apply the function to schema not to instance, we used statics keyword,
// If we had wanted to apply the function to an instance instead of statics we had to use methods keyword
ReviewSchema.statics.calculateAverageRating = async function (productId) {
    const result = await this.aggregate([
        {$match:{product:productId}},
        {$group:{
            _id:'$product',
            averageRating:{$avg:'$rating'},
            numOfReviews:{$sum:1}
        }}
    ])
    try {
        await this.model('Product').findOneAndUpdate(
            {_id:productId}, 
            {averageRating: Math.ceil(result[0]?.averageRating || 0),
            numOfReviews: result[0]?.numOfReviews || 0})
    } catch (error) {
        
    }
}

ReviewSchema.post('save', async function(){
    await this.constructor.calculateAverageRating(this.product);
})

ReviewSchema.post('remove', async function(){
    await this.constructor.calculateAverageRating(this.product);
})

module.exports = mongoose.model('Review', ReviewSchema);