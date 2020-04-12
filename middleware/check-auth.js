const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //Authorization: 'Bearer TOKEN'
    // If there is not token
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    // If the split crashes cuz there is no authentication in headers
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
};
