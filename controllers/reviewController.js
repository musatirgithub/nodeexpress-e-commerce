const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const cerateReview = async (req,res)=>{
    req.send('create review')
}

const getAllReviews = async (req,res)=>{
    req.send('get all reviews')
}

const getSingleReview = async (req,res)=>{
    req.send('get single review')
}

const updateReview = async (req,res)=>{
    req.send('update review')
}

const deleteReview = async (req,res)=>{
    req.send('delete review')
}

module.exports = {cerateReview, getAllReviews, getSingleReview, updateReview, deleteReview}