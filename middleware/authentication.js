const CustomError = require('../errors');
const {isTokenValid} =require('../utils');

const authenticateUser = async (req, res, next)=>{
    const token = req.signedCookies.token;
    if(!token){
        console.log('error, no token present')
        // throw new CustomError.UnauthenticatedError('')
    }
    console.log('error, no token present')
    next();
}

module.exports = {authenticateUser};