let bcrypt = require('bcrypt');
let express = require('express');
let Users = require('../models/users');
const Auth = require('../middlewares/authenticate');

let router = express.Router();

router.get('/', Auth.authenticate, function (req, res) {
  const id = req.query.ID;
  Users.userPublicDataById({id: id}, function (err, user) {
    if (err)
      return res.json(err);
    return res.json(user);
  });
});

router.post('/', function (req, res) {
  const { username, password, email, firstName, lastName } = req.body;
  if(username && password && email) {
    const password_digest = bcrypt.hashSync(password, 10);
    let user = {
      username: username,
      password: password_digest,
      email: email,
      firstName: firstName,
      lastName: lastName
    };
    Users.insert(user, function (err, result) {
      if (err)
        return res.json(err);
      return res.json(result);
    })
  }
});

router.delete('/', function (req, res) {
  let id = req.body.id;
  Users.delete(id, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

module.exports = router;