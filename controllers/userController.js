const {StatusCodes} = require('http-status-codes');
const User = require('../models/user');
const CustomError = require('../errors');
const {createTokenUser} = require('../utils');


const getAllUsers = async (req,res)=>{
    console.log(req.user)
    const users = await User.find({role:"user"}).select('-password');
    res.status(StatusCodes.OK).json({users})
}

const getSingleUser = async (req,res)=>{
    const {id} = req.params;
    const user = await User.findOne({_id:id}).select('-password');
    if(!user){
        throw new CustomError.NotFoundError(`There is no user with id: ${id}`);
    }
    res.status(StatusCodes.OK).json({user})
}

const showCurrentUser = async (req,res)=>{
    res.status(StatusCodes.OK).json({user:req.user});
}

const updateUser = async (req,res)=>{
    const {name, email}=req.body
    if(!name || !email){
        throw new CustomError.BadRequestError('Please provide all values!');
    }

    const newUser = await User.findOneAndUpdate({_id:req.user.userId}, {email,name}, {new:true, runValidators:true});
}

const updateUserPassword = async (req,res)=>{
    const {oldPassword, newPassword} = req.body
    if(!oldPassword || !newPassword){
        throw new CustomError.BadRequestError('Provide both old and new passwords');
    }

    const user = await User.findOne({_id:req.user.userId});

    const isPasswordCorrect = await user.comparePasswords(oldPassword);
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('Invalid Credentials!')
    }
    
    user.password = newPassword;
    await user.save();

    res.status(StatusCodes.OK).json({msg:'Success! Password updated!'})
}

module.exports = {getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword}