const CustomError = require('../errors');


const checkPermissions = (requestUser, resourceUserId) => {
    // console.log(requestUser.userId);
    // console.log(resourceUserId);
    // console.log(resourceUserId.toString());
    if (requestUser.role === 'admin') return;
    if (requestUser.userId === resourceUserId.toString()) return;
    throw new CustomError.UnauthorizedError('Not authorized to access this route!')
}

module.exports = checkPermissions