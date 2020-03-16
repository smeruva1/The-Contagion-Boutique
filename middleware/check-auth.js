//import jsonwebtoken for authorization
const jwt = require('jsonwebtoken');

//defining a function checkAuth that will be called when introduced in any route
const checkAuth = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization;

  // check if token is authorization token
  /* 
    headers: {
      Authorization: 'Bearer <token>'
    }
    */
    //check if token matches
    if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }
//if token does not match - give a error message in response
  if (!token) {
    res.status(400).json('Unauthorized: No token provided');
    return;
  }

  // check if jwt token is valid
  jwt.verify(token, 'shhhhh', (err, decoded) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Unauthorized: Invalid token'
      });
      return;
    }
    // send them on their way but set email and id values to request
    req.email = decoded.email;
    req.id = decoded.id;
    next();
  });
};

module.exports = checkAuth;
