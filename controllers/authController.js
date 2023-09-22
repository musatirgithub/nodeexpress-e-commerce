const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const register = async (req,res)=>{
    const user = await User.create(req.body)

    if(!user){
        throw new CustomError.BadRequestError('')
    }

    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req,res)=>{
    res.send('login user')
}

const logout = async (req,res)=>{
    res.send('logout user')
}

module.exports = {register, login, logout}