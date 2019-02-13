let jwt = require('jsonwebtoken');
let Users = require('../models/users');
const config = {
  jwtSecret: 'somesecretkeyforjsonwebtoken'
};

class Auth {
  static authenticate(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
      token = authorizationHeader.split(' ')[1];
    }

    if (token) {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
          res.status(401).json({error: 'Failed to authenticate'})
        } else {
          Users.userById({id: decoded.id}, function (result, err) {
            if(!result) {
              res.status(404).json({error: 'No such user'});
            }
            req.currentUser = result;
            next();
          });
        }
      })
    } else {
      res.status(403).json({
        error: 'No token provided'
      })
    }
  }
}
module.exports = Auth;