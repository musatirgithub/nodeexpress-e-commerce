const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');

const register = async (req,res)=>{
    const user = User.create(req.body)

    res.status(StatusCodes.CREATED).json(user)
}

const login = async (req,res)=>{
    res.send('login user')
}

const logout = async (req,res)=>{
    res.send('logout user')
}

module.exports = {register, login, logout}