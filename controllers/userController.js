const {StatusCodes} = require('http-status-codes')
const User = require('../models/user');
const CustomError = require('../errors');


const getAllUsers = async (req,res)=>{
    const users = await User.find({role:"user"}).select('-password');
    res.status(StatusCodes.OK).json({users})
}
const getSingleUser = async (req,res)=>{
    const {id} = req.params;
    const user = await User.findOne({_id:id}).select('-password');
    if(!singleUser){
        throw new CustomError.NotFoundError(`There is no user with id: ${id}`);
    }
    res.status(StatusCodes.OK).json({user})
}
const showCurrentUser = async (req,res)=>{
    res.send('show current user')
}
const updateUser = async (req,res)=>{
    res.send('update user')
}
const updateUserPassword = async (req,res)=>{
    res.send('update user password')
}

module.exports = {getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword}